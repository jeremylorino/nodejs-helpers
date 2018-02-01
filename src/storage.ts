import * as Storage from '@google-cloud/storage';
import * as _ from 'lodash';
import * as mimeTypes from 'mime-types';

const gcs = Storage();

/**
 * Recursively rename properties in to meet BigQuery field name requirements.
 *
 * @param {*} obj Value to examine.
 */
function fixNames(obj: any) {
  if (Array.isArray(obj)) {
    obj.forEach(fixNames);
  }
  else if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      fixNames(value);
      const fixedKey = key.replace('-', '_')
        .replace('@', '_at_')
        .replace('.', '_')
        .replace(/(^[^a-zA-Z_])/, '_$1');
      if (fixedKey !== key) {
        obj[fixedKey] = value;
        delete obj[key];
      }
    });
  }
}

export interface StorageProviderOptions {
  bucketName: string;
  forBigQuery: boolean;
}

export default class StorageProvider {
  private storage: Storage.Storage;
  
  options: StorageProviderOptions;
  
  /**
   * @param {object} options?
   * @param {string} options.bucketName - The default bucket where files will be saved.
   * @param {boolean} options.forBigQuery - Format data for the consumption
   * of BigQuery before save. Default: false
   **/
  constructor(options?: StorageProviderOptions) {
    this.storage = gcs;
    this.options = _.merge({
      forBigQuery: false,
    }, options);
  }

  /**
   * Save data to the remote storage provider.
   * 
   * @param {string} filename - The filename as it will appear on the remote storage provider.
   * @param {object} data - Data to be saved.
   * @param {object} options?
   * @param {string} options.bucketName - The bucket where files will be saved; this will
   * override the default bucketName set during instantiation.
   * @param {boolean} options.forBigQuery? - Format data for the consumption
   * of BigQuery before save. Default: false
   **/
  async save(filename: string, data: any, options?: StorageProviderOptions) {
    let _options = _.merge({}, this.options, options);
    let payload = data;

    if (!_options.bucketName) {
      throw new Error(`'options.bucketName' must be provided`);
    }

    if (_options.forBigQuery === true) {
      payload = _.merge([], data);
      fixNames(payload);
      payload = (Array.isArray(payload) ? payload : [payload])
        .map((event) => JSON.stringify(event))
        .join('\n');
    }

    const bucketName = _options.bucketName;
    const file = this.storage.bucket(bucketName).file(filename);

    // logger.info(`Saving events to ${filename} in bucket ${bucketName}`);
    console.log(`Saving events to ${filename} in bucket ${bucketName}`);
    
    try {
      await file.save(payload, {
        metadata: {
          contentType: mimeTypes.lookup(filename) || '',
        }
      });
      // logger.info(`JSON written to gs://${bucketName}/${filename}`);
      console.log(`JSON written to gs://${bucketName}/${filename}`);
      return {
        success: true,
        payload: payload,
      };
    } catch(err) {
      // logger.error(err);
      console.error(err);
      throw err;
    }
  }
}
export interface StorageProviderOptions {
    bucketName: string;
    forBigQuery: boolean;
}
export default class StorageProvider {
    private storage;
    options: StorageProviderOptions;
    /**
     * @param {object} options?
     * @param {string} options.bucketName - The default bucket where files will be saved.
     * @param {boolean} options.forBigQuery - Format data for the consumption
     * of BigQuery before save. Default: false
     **/
    constructor(options?: StorageProviderOptions);
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
    save(filename: string, data: any, options?: StorageProviderOptions): Promise<{
        success: boolean;
        payload: any;
    }>;
}

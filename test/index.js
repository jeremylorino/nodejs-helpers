/*global assert */
"use strict";

const {
  StorageProvider,
  MessageTransport,
  Logger,
} = require("../build"),
  assert = require("assert");

function testLogger() {
  const logger = new Logger();
  logger.info("test");
}

async function testMessageTransport() {
  try {
    const transport = new MessageTransport("test-jal", true);
    let response = await transport.publish({ jal: "test" }, { attr1: "1", attr2: "2" });
    assert(response !== null && response !== undefined);
  } catch (err) {
    console.error(err);
    console.log(err.code, err.message, err.details);
  }
}

async function testStorageProvider() {
  try {
    const storage = new StorageProvider({
      forBigQuery: true,
      bucketName: "now-ims-core-dev_bigquery-staging"
    });

    let response = await storage.save("test_jal/jal.txt", "hey");
    assert(response.success === true);
    assert(response.payload === "\"h\"\n\"e\"\n\"y\"");

    response = await storage.save("test_jal/jal.txt", "hey", { forBigQuery: false });
    assert(response.success === true);
    assert(response.payload === "hey");
  } catch (err) {
    console.error(err);
  }
}

(async() => {
  testLogger();
  await testMessageTransport();
  await testStorageProvider();
})();

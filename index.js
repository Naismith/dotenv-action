const core = require("@actions/core");
const dotenv = require("dotenv");
const { promisify } = require("util");
const fs = require("fs");
const readFileAsync = promisify(fs.readFile);

// most @actions toolkit packages have async methods
async function run() {
  try {
    const path = core.getInput("path") || ".env";

    console.log(`Reading from ${path}`);

    const buffer = await readFileAsync(path);

    const dotFile = dotenv.parse(buffer);

    console.log(dotFile);

    // const config = dotenv.parse('');
    core.exportVariable("test", "test");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

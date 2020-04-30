const core = require("@actions/core");
const dotenv = require("dotenv");
const { promisify } = require("util");
const fs = require("fs");
const readFileAsync = promisify(fs.readFile);

// most @actions toolkit packages have async methods
async function run() {
  try {
    const path = core.getInput("path") || ".env";

    const buffer = await readFileAsync(path);

    const dotFile = dotenv.parse(buffer);

    Object.entries(dotFile).forEach(([key, value]) => {
      core.exportVariable(key, value);
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

const core = require("@actions/core");
const dotenv = require("dotenv");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput("path");

    // const config = dotenv.parse('');
    core.exportVariable("test", "test");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

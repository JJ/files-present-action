import * as core from '@actions/core';

async function run() {
  try {
      const files = core.getInput('files');
      console.log( files )
  } catch (error) {
      core.setFailed(error.message);
  }
}

run();

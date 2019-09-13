import * as core from '@actions/core';
import fs from 'fs';

async function run() {
  try {
      const files = core.getInput('files')
      const fileList = files.split(/,\s+/)
      var doesntExist = ''
      fileList.forEach( function( file ) {          
          fs.stat(file, (exists) => {
              if (exists == null) {
                  return true;
              } else if (exists.code === 'ENOENT') {
                  doesntExist += ", " + file 
              }
          });
      })
      console.log("Missing files: ${doesntExist}")
      if (doesntExist ) {
          core.setFailed( "These files do not exist: ${doestnExist}" )
      }

  } catch (error) {
      core.setFailed(error.message);
  }
}

run();

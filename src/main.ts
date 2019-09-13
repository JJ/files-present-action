import * as core from '@actions/core';
import fs from 'fs';

async function run() {
  try {
      const files = core.getInput('files')
      const fileList = files.split(/,\s+/)
      console.log(fileList)
      var doesntExist = ''
      fileList.forEach( function( file ) {          
          fs.stat(file, (exists) => {
              if (exists == null) {
                  return true;
              } else if (exists.code === 'ENOENT') {
                  doesntExist += ", " + file 
              }
          });
          if (doesntExist ) {
              core.setFailed( "These files do not exist: ${doestnExist}" )
          }
      })

  } catch (error) {
      core.setFailed(error.message);
  }
}

run();

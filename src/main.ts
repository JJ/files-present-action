import * as core from '@actions/core';
import fs from 'fs';

async function run() {
  try {
      const files = core.getInput('files')
      const fileList = files.split(/,\s+/)
      var doesntExist = ''
      fileList.forEach( function( file ) {          
          if ( ! fs.existsSync(file) ) {
              console.log( "File " + file + " missing " ) 
              doesntExist += ", " + file
          }
      })
      console.log("Missing files: " + doesntExist)
      if (doesntExist ) {
          core.setFailed( "These files do not exist: " + doesntExist )
      }

  } catch (error) {
      core.setFailed(error.message);
  }
}

run();

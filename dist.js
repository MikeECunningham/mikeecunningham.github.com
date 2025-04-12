const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const DIST_FOLDER = path.join(__dirname, './dist');
const BUILD_FOLDER = path.join(__dirname, './build');


// Clean all files out of the directory except for the git index
fs.readdirSync(DIST_FOLDER).forEach(f=>{
    if(f == '.git') return;
    fs.rmSync(path.join(DIST_FOLDER, f), {recursive: true, force: true});
});

// Now copy all files from the build folder to the dist folder
fse.copySync(BUILD_FOLDER, DIST_FOLDER)




'use strict';

const fse = require('fs-extra');

const SKELETON_CLOSET = 'closet/skeletons/';

async function writeFile(skeleton) {
    try {
        const fileContents = await fse.readFile(
            SKELETON_CLOSET + skeleton,
            'utf-8'
        );
        fse.outputFile('./' + skeleton, fileContents);
    } catch (error) {
        console.error(`Error reading skeleton: ${error}`);
    }
}

module.exports = {
    writeFile
};
import { formats, transformGroups } from 'style-dictionary/enums';

const StyleDictionary = require('style-dictionary').extend({
    source: ['tokens/**/*.json'],
    platforms: {
        scss: {
            transformGroup: transformGroups.scss,
            buildPath: 'build/',
            files: [
                {
                    destination: 'variables.scss',
                    format: formats.scssVariables,
                },
            ],
        },
        // ...
    },
});

StyleDictionary.buildAllPlatforms();

// const StyleDictionary = require('style-dictionary');

// module.exports = {
//     // Source: Point to the new 'design-tokens' directory
//     source: ['design-tokens/**/*.json'],
//     platforms: {
//         css: {
//             transformGroup: 'css',
//             buildPath: 'dist/tokens/css/',
//             files: [
//                 {
//                     destination: 'variables.css',
//                     format: 'css/variables',
//                 },
//             ],
//         },
//         js: {
//             transformGroup: 'js',
//             buildPath: 'dist/tokens/js/',
//             files: [
//                 {
//                     destination: 'tokens.js',
//                     format: 'javascript/es6',
//                 },
//                 {
//                     destination: 'tokens.d.ts',
//                     format: 'typescript/es6-declarations',
//                 },
//             ],
//         },
//     },
// };
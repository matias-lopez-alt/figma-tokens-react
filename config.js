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
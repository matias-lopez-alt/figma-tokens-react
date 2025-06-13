// Style Dictionary Build Script
// This script builds design tokens into SCSS, JS, and JSON formats for use in your app.
// It always outputs to the design-tokens/build/ directory, regardless of where you run it from.

import('style-dictionary').then((sdModule) => {
    // Import Style Dictionary (ESM)
    const StyleDictionary = sdModule.default;
    const path = require('path');

    // Resolve paths for input tokens and output build directory
    const tokensPath = path.resolve(__dirname, 'figma-tokens.json');
    const buildPath = path.resolve(__dirname, 'build') + path.sep;

    // Configure Style Dictionary with multiple output platforms
    const sd = new StyleDictionary({
        source: [tokensPath],
        platforms: {
            // SCSS variables output
            scss: {
                transformGroup: 'scss',
                buildPath: buildPath,
                files: [
                    {
                        destination: 'variables.scss',
                        format: 'scss/variables',
                        options: {
                            showFileHeader: true
                        }
                    }
                ]
            },
            // JS (ES6 module) output
            js: {
                transformGroup: 'js',
                buildPath: buildPath,
                files: [
                    {
                        destination: 'tokens.js',
                        format: 'javascript/es6',
                        options: {
                            showFileHeader: true
                        }
                    }
                ]
            },
            // Nested JSON output
            json: {
                transformGroup: 'js',
                buildPath: buildPath,
                files: [
                    {
                        destination: 'tokens.json',
                        format: 'json/nested',
                        options: {
                            showFileHeader: true
                        }
                    }
                ]
            }
        }
    });

    // Build all configured platforms
    sd.buildAllPlatforms();
}).catch(error => {
    console.error('Error loading Style Dictionary:', error);
    process.exit(1);
});
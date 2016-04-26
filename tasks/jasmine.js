'use strict';
module.exports = function (grunt) {
    grunt.config('jasmine_node', {
        jasmine_node: {
            options: {
                coverage: {
                    thresholds: {
                        //branches: 80,
                        functions: 75,
                        statements: 75,
                        lines: 75
                    },
                    excludes: ['tests/**']
                },
                isVerbose: true,
                showColors: true,
                forceExit: true,
                match: '.',
                matchall: false,
                specFolders: ['tests'],
                extensions: 'js',
                specNameMatcher: 'spec',
                captureExceptions: true,
                teamcity: true
            },
            all: ['tests/**'],
            src: ['**/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-jasmine-node-coverage');
};

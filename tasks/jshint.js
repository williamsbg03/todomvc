'use strict';
module.exports = function (grunt) {
    grunt.config('jshint', {
        jshint: {
            src: [
                'tests/*/*.js',
                'src/server/app.js',
                'src/server/routes/*.js'
            ],
            options: {
                jshintrc: './.jshintrc',
                reporter: require('jshint-teamcity')
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};

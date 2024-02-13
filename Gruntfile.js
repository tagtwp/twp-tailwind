module.exports = function (grunt) {

    // Load multiple grunt tasks using globbing patterns
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Copy the front into the build directory
        copy: {
            files: [
                {expand: true, flatten: true, src: ['node_modules/animate.css/animate.css'], dest: 'assets/css', filter: 'isFile'},
            ],
        },
    });

    // Build task(s).
    grunt.registerTask('build', ['copy:files']);
};
module.exports = function (grunt) {

    // Load multiple grunt tasks using globbing patterns
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Copy the front into the build directory
        copy: {
            build: {
                files: [
                    {expand: true, flatten: true, src: ['node_modules/animate.css/animate.css'], dest: 'assets/css/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/swiper/swiper-bundle.min.css'], dest: 'assets/css/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/swiper/swiper-bundle.min.js'], dest: 'assets/js/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/wow.js-juzi/dist/wow.min.js'], dest: 'assets/js/', filter: 'isFile'},
                ],
            },
        },
        // Compress build directory into <name>.zip and <name>-<version>.zip
        compress: {
            build: {
                options: {
                    mode: 'zip',
                    archive: './build/<%= pkg.name %>-v<%= pkg.version %>.zip',
                },
                src: ['assets/**', '*.html'],
                dest: '<%= pkg.name %>/',
            },
        },
    });

    // Build task(s).
    grunt.registerTask('build', ['copy:build:files', 'compress:build']);
};
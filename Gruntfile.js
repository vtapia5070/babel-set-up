module.exports = function(grunt) {

    // Time your grunt tasks and never need to loadGruntTask again
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            dev: 'src',
            dist: 'dist',
            build: '<%= grunt.template.today("yyyymmdd") %>',
        },

        // local server
        connect: {
            server: {
                options: {
                    host: 'localhost',
                    port: process.env.PORT || '9000',
                    base: '<%= project.dev %>/',
                },
            },
        },

        // watch for file changes
        watch: {
            styles: {
                files: ['<%= project.dev %>/less/**/*.less'],
                tasks: ['less:dev'],
                options: {
                    livereload: true,
                },
            },
            scripts: {
                files: ['<%= project.dev %>/js/**/*.js', 'Gruntfile.js'],
                tasks: ['webpack:build', 'jshint:dev'], // !important
                options: {
                    livereload: true,
                    reload: true,
                },
            },
        },

        // compile less
        less: {
            dev: {
                files: {
                    '<%= project.dev %>/css/style.css': ['<%= project.dev %>/less/style.less']
                },
            },
        },

        // lint js
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
            },
            dev: ['<%= project.dev %>/js/**/*.js', '<%= project.dev %>/js/scripts.js'],
        },

        // copy
        copy: {
            setup: {
                expand: true,
                cwd: '<%= project.dev %>/vendor/font-awesome/fonts/',
                src: ['*.{otf,ttf,svg,eot,woff,woff2}'],
                dest: '<%= project.dev %>/fonts/',
            },
        },

        // webpack !pay attention to this task!
        webpack: {
            build: {
                entry: ['./src/js/app.jsx'],
                output: {
                    path: 'src/js/',
                    filename: 'build.js',
                },
                stats: {
                    colors: false,
                    modules: true,
                    reasons: true
                },
                storeStatsTo: 'webpackStats',
                progress: true,
                failOnError: true,
                watch: true,
                module: {
                    loaders: [
                        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
                    ],
                },
            },
        },
    });

    // Tasks
    grunt.registerTask('default', ['develop']);
    grunt.registerTask('develop', [
        'connect:server',
        'watch',
    ]);

    grunt.registerTask('setup', ['copy:setup']);
};

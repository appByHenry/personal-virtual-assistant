module.exports = function(grunt) {

    var directories = {
        app: 'app',
        node_modules: 'app/node_modules',
        scss: {
            src: 'scss'
        },
        js: {
            src: 'app'
        },
        targetDist: 'build/dist',
    };
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'app/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        sass: {
            dist: {
              
              options: {
                   // style: 'compressed',
                    sourcemap: 'none'
                },
                files: [
                    { 'build/base.css': 'scss/base.scss' },
                ]
            }
        },
        watch: {
            files: ['<%= jshint.files %>', 'scss/*.scss'],
            tasks: ['jshint', 'sass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('sass2css', ['sass']);

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });


    grunt.registerTask('default', ['jshint']);

};
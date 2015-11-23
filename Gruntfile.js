module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        presets: ['es2015', 'stage-0']
      },
      scripts: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.js', '!**/renderer/*.*'],
          dest: 'dist/'
        }]
      }
    },
    eslint: {
      scripts: ['src/**/*.js']
    },
    copy: {
      files: {
        cwd: 'src',
        src: ['**/*.html', '**/*.css', '**/fonts/*.*', '**/img/*.*'],
        dest: 'dist/',
        expand: true
      }
    }
  });

  grunt.registerTask('build', ['copy', 'babel']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('lint', ['eslint']);
};

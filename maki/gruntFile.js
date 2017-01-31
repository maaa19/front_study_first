module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify', 'watch']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      index: {
        src: 'src/js/index/*',
        dest: 'js/index.js'
      }
    },
    watch: {
      files: 'src/js/index/*',
      tasks: ['default'],
    }
  });
}
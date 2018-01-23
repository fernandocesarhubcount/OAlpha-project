module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['build/js/*.js'],
    },
    sass: {
      dist:{
        files: [{
          'app/index.css' : 'build/sass/*.scss'
        }]
      }
    },
    copy:{
      files:[
        {expand: true, src: ['build/images/*'], dest: 'app/images/'}]
    },
    uglify:{
      my_target: {
        files: {
          'app/index.js': ['build/js/libs/*.js','build/js/*.js']
        }
      }
    },
    watch: {
      files: ['build/js/*.js','build/sass/*.scss'],
      tasks: ['jshint','sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build-test', ['jshint','sass','copy','watch']);

  grunt.registerTask('build-prod', ['sass','uglify']);

};

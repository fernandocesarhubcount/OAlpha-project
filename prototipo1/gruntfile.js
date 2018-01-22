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
    uglify:{
      my_target: {
        files: {
          'app/index.js': ['build/js/*.js']
        }
      }
    },
    move:{
      move_without_rename:{
        src: 'build/images/',
        app: 'app/images/'
      },
      move_without_rename:{
        src: 'build/html/',
        app: 'app/html/'
      }
      move_without_rename:{
        src: 'build/manifest.json/',
        app: 'app/manifest.json/'
      }
    },
    watch: {
      files: ['<%= jshint.files %>','<%= sass.files =%>'],
      tasks: ['jshint','sass']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-move');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jshint','sass','uglify','move','watch']);

};

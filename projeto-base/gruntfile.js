module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['build/js/*.js'],
    },
    sass: {
      bethaindex:{
        files: [{
          'betha/css/index.css' : 'build/sass/index.scss'
        }]
      },
    },
    copy:{
      html: {
        expand: true,
        cwd:'build/html/',
        src: '*',
        dest: 'betha/',
        filter:'isFile'
      },
      manifest:{
        expand: true,
        cwd:'build/',
        src: 'manifest.json',
        dest: 'betha/',
        filter:'isFile'
      }
    },
    concat:{
      index:{
        src: ['build/js/*.js'],
        dest: 'betha/js/index.js'
      },
      bethalibs:{
        src: ['build/js/libs/*.js'],
        dest: 'betha/js/libs.js'
      }
    },
    imagemin:{
      bethaimg:{
        files: [{
            expand: true,
            cwd: 'build/images/',
            src: ['*.{png,jpg,gif}'],
            dest: 'betha/images/'
        }]
      }
    },
    uglify:{
      my_target: {
        files: {
          'betha/index.js': ['build/js/libs/*.js','build/js/*.js']
        }
      }
    },
    watch: {
      files: [
        'build/js/**/*.js',
        'build/sass/**/*.scss',
        'build/images/*.{png,jpg,gif}',
        'build/html/*.html',
        'build/manifest.json'
       ],
      tasks: ['jshint','sass','concat','copy']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['jshint','sass','concat','imagemin','watch']);
  grunt.registerTask('init-project',['jshint','sass','copy','concat','imagemin']);
  //grunt.registerTask('build', ['sass','uglify']);

};

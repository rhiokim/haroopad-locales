module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-jsonlint');


  grunt.initConfig({
    jsonlint: {
      main: {
        src: [ 
          '**/*.json',
          '!**/node_modules/**',
          '!**/dev/**',
          '!**/error.json'
        ]
      }
    }
  });

  grunt.registerTask('default', [ 'jsonlint:main' ]);
};
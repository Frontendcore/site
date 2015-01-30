module.exports = function(grunt) {

	grunt.initConfig({
		clean: {
			sassdoc: {
				src: ['build/sassdoc']
			},
			site: {
				src: ['build/']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean']);

};
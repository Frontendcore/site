module.exports = function(grunt) {

	grunt.initConfig({
		clean: {
			site: {
				src: ['build/']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean']);

};

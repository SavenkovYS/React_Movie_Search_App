var gulp = require("gulp");
var server = require("browser-sync").create();

gulp.task("browserSync", function(done) {
  server.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
});

gulp.task("serve", function() {
  gulp.watch("**/*.html").on("change", gulp.series(server.reload));
  gulp.watch("**/*.js").on("change", gulp.series(server.reload));
});

var watch = gulp.parallel("serve", "browserSync");

gulp.task("default", watch);
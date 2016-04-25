var gulp = require("gulp");
var livereload = require("gulp-livereload");

gulp.task("reload", function () {
    livereload.listen();
    gulp.watch("build/**/*.*", function (file) {
        livereload.changed(file);
    })
});

gulp.task("default",function(){
    gulp.start("reload");
});


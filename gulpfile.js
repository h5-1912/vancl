var gulp = require('gulp');
var loader = require('gulp-load-plugins')();
var browser = require("browser-sync").create();

//压缩js
gulp.task('js', function (done) {
	gulp.src('./js/*.js')
		.pipe(loader.babel({
			'presets': ['@babel/env']
		}))
		.pipe(loader.uglify())
		.pipe(gulp.dest('./dist/js/'))
	done()
})
//压缩css,sass
//sass:css的预处理,它可以定义变量,嵌套,混写等操作
gulp.task('css', function (done) {
	gulp.src('./css/*.css')
		.pipe(loader.minifyCss())
		.pipe(gulp.dest('./dist/css/'));

		gulp.src('./css/*.scss')
		.pipe(loader.sass())
		.pipe(loader.minifyCss())
		.pipe(gulp.dest('./dist/css/'))

	done()
})

// gulp.task('scss', function (done) {
// 	gulp.src('./css/*.scss')
// 		.pipe(loader.sass())
// 		// .pipe(loader.minifyCss())
// 		.pipe(gulp.dest('./dist/css/'))
// 	done()
// })

// gulp.task('sass', function (done) {
	
// 	done()
// })

//压缩html
gulp.task('html', function (done) {
	gulp.src('./*.html')
		.pipe(loader.minifyHtml())
		.pipe(gulp.dest('./dist/'))
	done()
})
//压缩图片
gulp.task('img', function (done) {
	gulp.src('./images/**')
		.pipe(loader.imagemin())
		.pipe(gulp.dest('./dist/images/'))
	done()
})
gulp.task('php',function(done){
	gulp.src('./php/*.php')
	.pipe(gulp.dest('./dist/php/'))
	done()
})
gulp.task('json',function(done){
	gulp.src('./js/*.json')
	.pipe(gulp.dest('./dist/js/'))
	done()
})
//合并前面的任务,并刷新页面
gulp.task('minify', gulp.series(gulp.parallel('js', 'html', 'css','php','json'), function (done) {
	//刷新页面
	browser.reload()
	done()
}))
//开启web服务器
gulp.task('default', gulp.series(gulp.parallel('js', 'html', 'css', 'img','php','json'), function (done) {
	browser.init({
		server: './dist/',
		port: 8090
	})
	gulp.watch('./css', gulp.series('minify'));
	gulp.watch('./js', gulp.series('minify'));
	gulp.watch('./*.html', gulp.series('minify'))
	done()
}))
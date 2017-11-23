/*多个开发者共同开发一个项目，每位开发者负责不同的模块，这就会造成一个完整的项目实际上是由许多的“代码版段”组成的；
使用less、sass等一些预处理程序，降低CSS的维护成本，最终需要将这些预处理程序进行解析；
合并css、javascript，压缩html、css、javascript、images可以加速网页打开速度，提升性能；
这一系列的任务完全靠手动完成几乎是不可能的，借助构建工具可以轻松实现。
所谓构建工具是指通过简单配置就可以帮我们实现合并、压缩、校验、预处理等一系列任务的软件工具。
常见的构建工具包括：Grunt、Gulp、F.I.S（百度出品）、webpack*/

// Gulp
// 使用步骤：
// 1.npm install -g gulp（配置全局gulp的变量）
// 2.本地安装gulp，进入项目根目录执行npm install gulp
// 3.任务清单，在项目根目录中/创建gulpfile.js（这是一个配置文件）

var gulp = require('gulp');

concat = require('gulp-concat');//需要安装 npm install gulp-concat
gulp.task('myconcat',function(){ //创建任务，concat
	gulp.src('./client/js/*.js')  //需要要合并的文件
	.pipe(concat('index.js')) //合并后的名字，gulp.pipe() 管道，将需要构建的资源“输送”给插件
	.pipe(gulp.dest('./build/js')); //合并后的路径
});

less = require('gulp-less');
gulp.task('myless',function(){
	gulp.src('.public/less/*.less') //需要要处理的文件文件
	.pipe(less())//调用less()
	.pipe(gulp.dest('./pulic/css'));
});

// gulp-less 编译LESS文件
// gulp-autoprefixer 添加CSS私有前缀
// gulp-cssmin 压缩CSS
// gulp-rname重命名
// gulp-imagemin 图片压缩
// gulp-uglify 压缩Javascript
// gulp-concat 合并
// gulp-htmlmin 压缩HTML
// gulp-rev 添加版本号
// gulp-rev-collector 内容替换
// gulp-useref
// gulp-if


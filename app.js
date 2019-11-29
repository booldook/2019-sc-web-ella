/* Express 구현 */
const express = require("express");
const app = express();
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

/* node_modules */
const path = require("path");
const fs = require("fs");
const methodOverride = require('method-override');
const morgan = require("morgan");
const bodyParser = require("body-parser");

/* modules */
const createError = require('http-errors');
const util = require(path.join(__dirname, "modules/util"));

/* morgan 설정 */
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), {flags: 'a'});
app.use(morgan('combined', { stream: accessLogStream }));

/* Express 설정 */
app.locals.pretty = true;
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

/* method-override 설정 */
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride(function (req, res) {
	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
		var method = req.body._method
		console.log(method);
		delete req.body._method
		return method
	}
}));

/* router - ella */
const frontRouter = require("./router/front");
const adminLoginRouter = require("./router/admin-login");
const adminBannerRouter = require("./router/admin-banner");
const apiRouter = require("./router/api");
app.use("/", frontRouter);
app.use("/admin/login", adminLoginRouter);
app.use("/admin/banner", adminBannerRouter);
app.use("/api", apiRouter);

/* router - rest */
/*
const sqlRouter = require("./router/rest-sql");
const ajaxRouter = require("./router/rest-ajax");
const seqRouter = require("./router/rest-seq");
app.use("/rest-sql", sqlRouter);
app.use("/rest-ajax", ajaxRouter);
app.use("/rest-seq", seqRouter);
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});










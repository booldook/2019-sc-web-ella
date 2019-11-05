/* Express 구현 */
const express = require("express");
const app = express();
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

/* node_modules */
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const bodyParser = require("body-parser");

/* modules */


/* Express 설정 */
app.locals.pretty = true;
app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

/* morgan 설정 */
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));


/* router */
const frontRouter = require("./router/front");
const adminRouter = require("./router/admin");
const apiRouter = require("./router/api");
const sqlRouter = require("./router/rest-sql");
app.use("/", frontRouter);
app.use("/admin", adminRouter);
app.use("/api", apiRouter);
app.use("/rest-sql", sqlRouter);






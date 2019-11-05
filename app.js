/* Express 구현 */
const express = require("express");
const app = express();
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

/* node_modules */
const path = require("path");

/* modules */


/* Express 설정 */
app.locals.pretty = true;
app.use("/", express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


/* router */
const frontRouter = require("./router/front");
const adminRouter = require("./router/admin");
app.use("/", frontRouter);
app.use("/admin", adminRouter);






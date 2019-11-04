const express = require("express");
const app = express();
const path = require("path");
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});
app.use("/", express.static(path.join(__dirname, "public")));



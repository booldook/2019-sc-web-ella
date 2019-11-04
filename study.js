const express = require("express");
const app = express();
app.listen(3001, () => {
	console.log("http://127.0.0.1:3001");
});

// [JS] 문자열을 배열로... 배열을 문자열로...
var str = "010-8332-8040";
var tel = str.split("-");
console.log(tel);
var str2 = tel.join("-");
console.log(str2);

// [express]의 [path]에 대해 알아보자
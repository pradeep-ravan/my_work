// npm init -y
// npm install request
// npm install cheerio
let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
request("https://wwww.google.com", cb);
function cb(eror, response, html) {
    if (error) {
        console.log(error)  
    } else {
        extractHtml(html);
    }
}
function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let selectElem = selector
}
console.log("after");
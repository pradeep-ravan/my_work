let fs = require("fs");
console.log("Before");
let p1 = fs.promises.readFile("f1.txt");
let p2 = fs.promises.readFile("f2.txt");
let p3 = fs.promises.readFile("f3.txt");

let combinePromise = Promise.all([p1, p2, p3]);
console.log(combinePromise);
combinePromise
    .then(function (combinedFileData) {
        for(let i = 0; i < combinedFileData.length; i++){
            console.log("conten ->" + combinedFileData[i]);
        }

    })
    console.log("After")
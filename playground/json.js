// var obj = {name:'rishabh'};
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// var jsonStr = '{"name":"rishabh"}';
// var jsonObj = JSON.parse(jsonStr);
// console.log(typeof jsonObj);
// console.log(jsonObj);
const fs = require('fs');

var noteEntry = {
  title:'sample',
  body:'sample'
};

//noteEntryString
var noteEntryString = JSON.stringify(noteEntry);
fs.writeFileSync('notes.json',noteEntryString);

//note
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

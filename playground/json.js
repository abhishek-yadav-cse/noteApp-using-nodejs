// var obj = {
//   name: 'Abhishek'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj); //output of this is string
// console.log(stringObj); //output of this is name: 'Abhishek'


// var personString = '{"name": "Abhishek","age": 23}';
// //Since it is a string we need to make it an object
//
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


//ANOTHER METHOD
const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString); 
console.log

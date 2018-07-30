const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var addNote = (title, body) => {
  //console.log('Adding Note', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};
  //adding the note into the notes array
//   notes.push(note);
//   fs.writeFileSync('notes-data.json', JSON.stringify(notes));
// };

var getAll = () => {
  //console.log('Getting all notes');
  return fetchNotes();
};

var getNote = (title) => {
  //console.log('Reading note', title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => {
    return note.title === title;
  });
  return filteredNotes[0];
};


var removeNote = (title) => {
  //fetchNotes
  var notes = fetchNotes();
  //filter notes , removing the one with title of argument
  var filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });
  //or it can also writtten as follows
  //var filteredNotes = notes.filter(note) => note.title !== title); //ES6 notation
  //save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  //Break on this line and use repl to output note
  debugger;
  //Use read command with title
  console.log('----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
//getAll:getAll
//property:value
//In ES6 if property and value are same there is no need
//specify it in this format.
  getNote,
  removeNote,
  logNote
};

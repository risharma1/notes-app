
  const fs = require('fs');
  /**
  function to search notes
  */
var findNoteWithTitle = (title,notesArray)=>{
  var noteEntry = notesArray.filter((note)=>note.title===title);
  return noteEntry;
};
/**
function to read notes in array from file
*/
var fetchNotes = ()=>{
  var jsonObjArray = [];
  try{
    jsonObjArray = JSON.parse(fs.readFileSync('./playground/notes.json'));
  } catch (e){
    console.log('File read error');
  }
  return jsonObjArray;
};

/**
function to write notes array to file
*/
var putNotes = (notesArray)=>{
  try{
    fs.writeFileSync('./playground/notes.json',JSON.stringify(notesArray));
  }catch(e){
    console.log("File write error");
  }
  return;
};
/**
function api to add notes
*/
var add = (title,body)=>{
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  if(findNoteWithTitle(title,notes).length==0){
    notes.push(note);
    putNotes(notes);
    return note;
  }
  return;
};
/**
function to fetch note with title info
*/
var getNote = (title)=>{
  console.log('reading for ',title);
  var notes = fetchNotes();
  var note = findNoteWithTitle(title,notes);
  return note;
};
/**
function to get all notes
*/
var getNoteList = ()=>{
  console.log('listing notes');
  return fetchNotes();
};
/**
function to delete note with title
*/
var removeNote = (title)=>{
  console.log('removing note title: ', title);
  var notes = fetchNotes();
  var updatedNotes = notes.filter((note)=>note.title!==title);
  putNotes(updatedNotes);
  return notes.length!=updatedNotes.length?true:false;
};

var logNote =(note)=>{
  debugger;
  console.log(`\n title:${note.title}, body:${note.body}`);
};

module.exports = {
  add,
  getNote,
  getNoteList,
  removeNote,
  logNote
};

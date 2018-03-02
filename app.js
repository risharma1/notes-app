console.log('start app.js');
//require statements
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

/**
validate.js content for yargs validations of inpurt arguments form cmd line
*/
var validations = {
  titleOptions:{
    describe: 'note title',
    demand: true,
    alias: 't'
  },
  bodyOptions:{
    describe: 'note body text',
    demand: true,
    alias: 'b'
  }
};


//const argv = yargs.argv;
/**
Advanced yargs
.command(<argument>,<argument description>,argument flag object)
*/
const argv = yargs
  .command('add','Add a new note to NoteList',{
    title:validations.titleOptions,
    body:validations.bodyOptions
  })
  .command('read','Read a note from NoteList',{
    title:validations.titleOptions
  })
  .command('remove','Remove an existing note from NoteList',{
    title:validations.titleOptions,
    })
  .command('list','List all notes from NoteList',{
  })
  .help()
  .argv;


function handler(cmd){
  switch(cmd){
    case 'add': console.log('add block handler');
    var note = notes.add(argv.title,argv.body);
    if(note){
      console.log('Note added successfully.');
    }else{
      console.log('Note exists already.');
    }
    break;

    case 'remove': console.log('remove block handler');
    var isNoteRemoved = notes.removeNote(argv.title);
    if(isNoteRemoved){
      console.log("Note found and removed.");
    }else{
      console.log("Note not found for this title.");
    }
    break;
    case 'list': console.log('list block handler');
    var notesArray = notes.getNoteList();
    notesArray.forEach((note)=>{
      notes.logNote(note);
    });
    break;
    case 'read': console.log('read block handler');
    var note = notes.getNote(argv.title);
    if(note.length>0){
      notes.logNote(note);
    }else{
      console.log('No note for this title exists.');
    }
    break;
    default: console.log(`${cmd} command not found!`);
  }
}


if(process.argv.length>2){
  cmdParam = argv._[0];
  handler(cmdParam);
}

// fs.appendFile('notes.txt',`hello ${os.userInfo().username}`,function(err){
//  if(err){
//    console.log('Oops, can\'t write!');
//  }
//});

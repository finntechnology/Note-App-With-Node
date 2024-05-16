const fs = require("fs");
const { argv } = require("process");

function createNote(argv) {
  const { noteTitle, NoteDescription } = argv;

  let useNotes = [];

  useNotes.push({
    noteTitle: noteTitle,
    NoteDescription: NoteDescription,
  });

  fs.readFile("./note.json", "utf-8", (err, data) => {
    if (err) {
      fs.writeFileSync("./note.json", JSON.stringify(useNotes), "utf-8");
      return;
    }

    // add a new note to the already stored note
    const updatedNote = JSON.parse(data);
    updatedNote.push({
      noteTitle: noteTitle,
      NoteDescription: NoteDescription,
    });

    // update the notes store in our storage
    fs.writeFileSync("./note.json", JSON.stringify(updatedNote), "utf-8");
  });
}

// function to read note

const readNote = () => {
  fs.readFile("./note.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
};

function deleteSingleNote(argv) {
  const { noteTitle } = argv;
  fs.readFile("./note.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    // convert the json array back to an iterable array
    const userStoredNote = JSON.parse(data);

    // return the updated array that does not include the one that has the note title
    const updatedNote = userStoredNote.filter(
      (item) => item.noteTitle !== noteTitle
    );
    //  update the notes stored in our storage
    fs.writeFileSync("./note.json", JSON.stringify(updatedNote), "utf-8");
  });
}

function readSingleNote(argv) {
  const { noteTitle } = argv;
  fs.readFile("./note.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    // convert the json array back to an iterable array
    const userStoredNote = JSON.parse(data);

    // return a single not that matches a note title provided by the user
    const singleNote = userStoredNote.find(
      (item) => item.noteTitle === noteTitle
    );
    console.log(singleNote);
  });
}

module.exports = {
  createNote,
  readNote,
  deleteSingleNote,
  readSingleNote,
};

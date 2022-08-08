import { loadNotes, onNewNote, onSelectedNote } from "./socket.js";
import { fillForm, handleSubmit, renderNote, renderNotes } from "./ui.js";

loadNotes(renderNotes);
onNewNote(renderNote);
onSelectedNote(fillForm);

document.querySelector("#note-form").addEventListener("submit", handleSubmit);

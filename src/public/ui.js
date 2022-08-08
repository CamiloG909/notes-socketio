import { addNote, getNoteById, deleteNote, updateNote } from "./socket.js";
const form = document.querySelector("#note-form");
const titleInput = form["title"];
const descriptionInput = form["description"];
let savedId = "";

export const createNoteItem = ({ _id, title, description }) => {
	const noteItem = document.createElement("li");

	noteItem.innerHTML = `
			<p class="notes-list__title">${title}</p>
			<p class="notes-list__description">${description}</p>
			<button class="notes-list__update"><i class="bi bi-pencil-fill"></i> UPDATE</button>
			<button class="notes-list__delete"><i class="bi bi-x-lg"></i> DELETE</button>
		`;

	noteItem
		.querySelector(".notes-list__update")
		.addEventListener("click", () => getNoteById(_id));

	noteItem
		.querySelector(".notes-list__delete")
		.addEventListener("click", () => deleteNote(_id));

	return noteItem;
};

export const fillForm = (note) => {
	titleInput.value = note.title;
	descriptionInput.value = note.description;
	savedId = note._id;

	form.querySelector(".note-form__btn").innerHTML =
		'<i class="bi bi-arrow-clockwise"></i> UPDATE';
};

export const renderNote = (note) => {
	const notesList = document.querySelector("#notes");
	notesList.appendChild(createNoteItem(note));
};

export const renderNotes = (notes) => {
	const notesList = document.querySelector("#notes");
	notesList.innerHTML = "";

	notes.forEach((note) => {
		notesList.appendChild(createNoteItem(note));
	});
};

export const handleSubmit = (e) => {
	e.preventDefault();

	if (savedId) {
		updateNote(savedId, titleInput.value, descriptionInput.value);
	} else {
		addNote(titleInput.value, descriptionInput.value);
	}

	savedId = "";
	form.querySelector(".note-form__btn").innerHTML =
		'<i class="bi bi-plus-lg"></i> ADD';
	form.reset();
};

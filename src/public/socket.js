const socket = io();

export const loadNotes = (callback) => {
	socket.on("server:loadnotes", callback);
};

export const addNote = (title, description) => {
	socket.emit("client:addnote", { title, description });
};

export const onNewNote = (callback) => {
	socket.on("server:addednote", callback);
};

export const getNoteById = (id) => {
	socket.emit("client:getnotebyid", id);
};

export const onSelectedNote = (callback) => {
	socket.on("server:selectednote", callback);
};

export const updateNote = (id, title, description) => {
	socket.emit("client:updatenote", { id, title, description });
};

export const deleteNote = (id) => {
	socket.emit("client:deletenote", id);
};

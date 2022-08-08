const Note = require("./models/Note");

module.exports = (io) => {
	io.on("connection", (socket) => {
		const emitNotes = async () => {
			const notes = await Note.find();

			io.emit("server:loadnotes", notes);
		};
		emitNotes();

		socket.on("client:addnote", async (note) => {
			const newNote = await Note.create(note);

			io.emit("server:addednote", newNote);
		});

		socket.on("client:deletenote", async (id) => {
			await Note.findByIdAndDelete(id);
			emitNotes();
		});

		socket.on("client:getnotebyid", async (id) => {
			const note = await Note.findById(id);

			socket.emit("server:selectednote", note);
		});

		socket.on("client:updatenote", async ({ id, title, description }) => {
			await Note.findByIdAndUpdate(id, { title, description });
			emitNotes();
		});
	});
};

const { Schema, model } = require("mongoose");

const Note = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = model("Note", Note);

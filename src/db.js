const { connect } = require("mongoose");

const connectDb = async () => {
	try {
		await connect(process.env.DB_URI);
		console.log("DB Connected");
	} catch (e) {
		console.error(e);
	}
};

module.exports = connectDb;

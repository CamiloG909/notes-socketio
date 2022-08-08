const { Router } = require("express");
const router = Router();
const {} = require("../controllers/notes.controller");

router.get("/", (req, res) => {
	res.send("Notes");
});

module.exports = router;

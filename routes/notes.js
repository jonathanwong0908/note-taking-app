const express = require("express");

const router = express.Router();

const noteController = require("../controllers/notes");

router.get("/", noteController.getNotes);

router.post("/new-note", noteController.postAddNote);

router.post("/update-note/:id", noteController.postUpdateNote);

router.post("/delete-note/:id", noteController.postDeleteNote);

module.exports = router;
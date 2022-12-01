const Note = require("../models/notes");
const knexFile = require("../knexfile").development;
const knex = require("knex")(knexFile);

exports.getNotes = (req, res) => {
    // res.send("hi");
    const username = req.auth.user;
    Note.fetchAll(username)
        .then(notes => {
            res.render("index", {
                notes: notes
            });
        })
}

exports.postAddNote = (req, res) => {
    const username = req.auth.user;
    const note = req.body.newNote;
    Note.saveNewNote(username, note);
    res.redirect("/");
}

exports.postUpdateNote = (req, res) => {
    const noteId = Object.keys(req.body)[0];
    const updatedNote = req.body[Object.keys(req.body)[0]];
    Note.updateNote(noteId, updatedNote)
        .then(result => {
            res.redirect("/");
        })
}

exports.postDeleteNote = (req, res) => {
    const noteId = Object.keys(req.body)[0];
    Note.deleteByIndex(noteId)
        .then(result => {
            res.redirect("/");
        })
}
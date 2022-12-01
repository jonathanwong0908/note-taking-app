const knexFile = require("../knexfile").development;
const knex = require("knex")(knexFile);

module.exports = class Note {
    constructor(user, note) {
        this.user = user;
        this.note = note;
    }

    static saveNewNote(username, note) {
        knex("users")
            .select("id")
            .where("username", username)
            .first()
            .then(id => {
                return knex("notes").insert({
                    user_id: id.id,
                    content: note
                })
            })
    }

    static updateNote(noteId, updatedNote) {
        return knex("notes").update({ content: updatedNote }).where("id", noteId);
    }

    static deleteByIndex(noteId) {
        return knex("notes").del().where("id", noteId);
    }

    static fetchAll(username) {
        return knex("users")
            .select("notes.id", "notes.content")
            .join("notes", "users.id", "notes.user_id")
            .where("username", username)
            .orderBy("id", "desc")
    }
}
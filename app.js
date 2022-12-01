const express = require("express");
const basicAuth = require("express-basic-auth");
const myAuthorizer = require("./auth/myAuthorizer");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(basicAuth({
    authorizeAsync: true,
    authorizer: myAuthorizer(),
    challenge: true
}))

const noteRoutes = require("./routes/notes");

app.use(noteRoutes);

app.listen(3000);
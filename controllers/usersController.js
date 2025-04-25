const db = require("../db/queries");


async function getIndex(req, res) {
    let messages;
    messages = await db.getAllMessages();
    res.render("index", { messages });

}

async function getForm(req, res) {
    res.render("form");
}

async function postMessage(req, res) {
    const {name, message} = req.body;
    await db.insertMessage(name, message);
    res.redirect("/");
}







module.exports = {
    getIndex,
    getForm,
    postMessage
}
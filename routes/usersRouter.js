const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.getIndex);
usersRouter.get("/new", usersController.getForm);
usersRouter.post("/new", usersController.postMessage);

module.exports = usersRouter;
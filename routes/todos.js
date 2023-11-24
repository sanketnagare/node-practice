const express = require("express");
const router = express.router();

const {createTodo} = require("../controllers/createTodo");

//define api routes

router.post("/createTodo", createTodo);

module.exports = router;
const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middle ware to parse json request body
app.use(express.json());

//imports routes for todo api
const todoRoutes = require("./routes/todos")

//mount the todo API routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})


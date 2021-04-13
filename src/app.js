if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const theatersRouter = require("./theaters/theaters.router");
const moviesRouter = require("./movies/movies.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
app.use(express.json());

app.use("/theaters", theatersRouter);
app.use("/movies", moviesRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;

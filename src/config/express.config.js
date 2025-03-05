const express = require("express");
const app = express();
const cors = require("cors");
const routers = require("./routers.config");

require("../config/db.config")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routers)

app.use((error, req, res, next) => {
  let statusCode = error.code || 500;
  let detail = error.detail || error;
  let message = error.message || "Interanal Server Error";
  let status = error.status || "SERVER_ERROR";

  res.status(statusCode).json({
    detail: detail,
    message: message,
    status: status,
  });
});

module.exports = app;

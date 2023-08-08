require("express-async-errors");
const winston = require("winston");

module.exports = function () {
  winston.add(
    new winston.transports.File({ filename: "logfile.log", level: "error" })
  );
};
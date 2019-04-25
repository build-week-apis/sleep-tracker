const express = require("express");
const auth = require("../../authentication/auth.js");

module.exports = server => {
  server.get("/api/users", auth.authAllUsers);
  server.get("/api/user/:id", auth.authenticate);
};
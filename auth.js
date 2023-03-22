const express = require("express");
const jwt = require("jsonwebtoken")
require('../db/conn')
const config = process.env;
const bcrypt = require("bcryptjs")
const Student = require("../models/student")
require("../poststudent")
require('dotenv').config()
const router = express.Router();


router.use(express.json());






const auth = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = auth;
                



            

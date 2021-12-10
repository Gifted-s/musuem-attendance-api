const axios = require("axios");
const VisitorController = require("../controllers/visitor.controller");
const visitorRouter = require("express").Router();
const visitorController = new  VisitorController()
visitorRouter.get('/', visitorController.getAttendance)
module.exports = visitorRouter
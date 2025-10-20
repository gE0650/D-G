const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");

router.get("/", commentsController.getComments);
router.post("/", commentsController.addComments);

module.exports = router;

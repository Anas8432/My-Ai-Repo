const express = require("express");

const router = express.Router();

const { chatWithAI } = require("../controllers/chatController");

router.get("/", (req, res) => {
    res.send("Chat API Working");
});

router.post("/", chatWithAI);

module.exports = router;
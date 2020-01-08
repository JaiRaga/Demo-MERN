const express = require("express");
const Servers = require("../models/ServerPort");
const router = express.Router();

router.get("/", async (req, res) => {
  const servers = await Servers.find();
  res.send(servers);
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  const serverPort = new Servers(req.body);
  try {
    await serverPort.save();
    res.send(serverPort);
  } catch (e) {
    res.status(400).send("Unable to save the port");
  }
});

module.exports = router;

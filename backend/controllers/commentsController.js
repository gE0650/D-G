const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/comments.json");

function readComments() {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
}

function writeComments(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

exports.getComments = (req, res) => {
  const comments = readComments();
  res.json(comments);
};

exports.addComments = (req, res) => {
  const comments = readComments();
  console.log(req.body); //for debug
  const newcomment = {
    id: Date.now(),
    text: req.body.text,
    name: req.body.name,
  };
  comments.push(newcomment);
  writeComments(comments);
  res.status(201).json(newcomment);
};

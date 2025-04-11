import "./database.js";
import {PostModule1}  from "./models.js"
import express from "express";

export const app = express();

app.use(express.json());

app.get("/api/search", (req, res) => {
  const text = req.query.text;

  PostModule1.find({
    $or: [
      {
        title: new RegExp(text, "i"),
      },
      {
        content: new RegExp(text, "i"),
      },
    ],
  })
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      console.error("search did not yield any result!", error);

      res.status(500).send({
        message: "search did not yield any result!",
      });
    });
})

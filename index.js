"use strict";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

class Task {
  constructor(task) {
    this.text = task;
    this.completed = false;
  }
}

class List {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

const dailyList = new List("Daily List");
let lists = [];
let currentList = 0;
lists.push(dailyList);

app.get("/", (req, res) => {
  res.render("index.ejs", {lists, currentList})
});

app.post("/addTask", (req, res) => {
  let newTask = new Task(req.body.task);
  lists[currentList].addTask(newTask);
  res.render("index.ejs", { lists, currentList });
});

app.post("/taskComplete", (req, res) => {
  
  for (let taskID of req.body.taskCheckbox) {
    console.log(taskID);
    // let taskStatus = lists[currentList].tasks[taskID].completed;
    // taskStatus = !taskStatus;
    // console.log(lists[currentList].tasks.completed);
  };
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});

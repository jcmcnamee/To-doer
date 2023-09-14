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
let completedTasks = [];
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
  if (req.body.taskCheckbox) {
    completedTasks = [...req.body.taskCheckbox];
    for (let task in lists[currentList].tasks) {
      if (completedTasks.includes(task)) {
        lists[currentList].tasks[task].completed = true;
       
      } else {
        lists[currentList].tasks[task].completed = false;
      };
    };
  } else {
    for (let task of lists[currentList].tasks) {
      task.completed = false;
    }
    completedTasks = [];
  };
console.log(lists[currentList].tasks);
res.render("index.ejs", { lists, currentList });
});


  // for (let task in lists[currentList].tasks) {
  //   if (req.body.taskCheckbox.includes(lists[currentList].tasks[task])) {
  //     lists[currentList].tasks[task].completed = true;
  //     console.log(lists[currentList].task.text + " completed is: " + lists[currentList].tasks[task].completed);
  //   } else {
  //     lists[currentList].tasks[task].completed = false;
  //     // console.log(lists[currentList].task.text + " completed is: " + lists[currentList].tasks[task].completed);
  //   }
  // };

  // console.log(lists[currentList].tasks);
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});

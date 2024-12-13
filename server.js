// TODO: this file :)
const express = require("express");
const employees = require("./employees");
const app = express()

const PORT = 3000

app.use(express.json());



app.get("/employees/random", async (req, res) => {
    console.log(employees.length);
    const randomId = Math.floor(Math.random() * employees.length);

    res.json(employees[randomId -1]);
 });


app.get("/employees/:index", (req, res) => {
    const { index } = req.params;
    //req.body is for obtaining any data the users send in the body of the requests
    //req.params is for obtaining any data the user puts in the url
    //req.user is for header data, usually obtaining token info
      if (index < 0 || index >= employees.length) {
      res.status(404).send("there is no employee with that id.");
    } else {
      res.json(employees[index -1]);
    }
  });

  app.get("/employees", (req, res) => {
    res.json(employees);
});


 app.get("/", (req, res) => {
    res.send ("Hello employees");
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
const express = require("express");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const mysqlConnection = require("./config/connection");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain we need to make the request from
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());

app.get("/tasks", (req, res) => {
  mysqlConnection.query("Select * FROM task", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

app.delete("/task", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM task WHERE id=?",
    [req.query.id],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});

app.post(
  "/task",
  [
    // Validate and sanitize input
    body("description")
      .isString()
      .trim()
      .notEmpty()
      .withMessage("Description is required and must be a string."),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    mysqlConnection.query(
      "INSERT INTO task(description) values(?)",
      [req.body.description],
      (err, rows) => {
        if (err) {
          res.status(400).json({ message: err.sqlMessage });
        } else {
          res.status(200).json({ message: "Task saved successfully!" });
        }
      }
    );
  }
);

const PORT = 8080;
//listen to a port to make the APIs working
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

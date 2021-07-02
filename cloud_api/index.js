const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "mysql_username",
  password: "mysql_password",
  database: "intersec",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get/countunsafe", (req, res) => {
  const sqlSelect =
    "SELECT COUNT(*) AS countunsafe FROM upload_files WHERE vendor='vendor_mail' AND final_res='Malicious'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get/countsafe", (req, res) => {
  const sqlSelect =
    "SELECT COUNT(*) AS countsafe FROM upload_files WHERE vendor='vendor_mail' AND final_res='Safe'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const v_email = req.body.v_email;
  const bucket_name = req.body.bucket_name;
  const v_access_key_id = req.body.v_access_key_id;
  const v_secret_key = req.body.v_secret_key;

  const sqlInsert =
    "INSERT INTO vendor (v_email, bucket_name, v_access_key_id, v_secret_key) VALUES (?, ?, ?, ?);";
  db.query(
    sqlInsert,
    [v_email, bucket_name, v_access_key_id, v_secret_key],
    (err, result) => {
      console.log(err);
      console.log("Send Success");
      // res.send("hello World");
    }
  );
});
app.listen(3001, () => {
  console.log(`running on port ${port}`);
});

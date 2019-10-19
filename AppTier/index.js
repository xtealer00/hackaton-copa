// errors on code found
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const mysql = require("mysql");
// connection configurations
const mc = mysql.createConnection({
  host: "copadataset.cdtcpg3ariye.us-east-1.rds.amazonaws.com",
  user: "copadbadmin",
  password: "copadb2020",
  database: "copadbvpc"
});

// connect to database
mc.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./app/routes/appRoutes.js"); //importing route
routes(app); //register the route

app.listen(port, () => {
  console.log("API server started on: " + port);
});

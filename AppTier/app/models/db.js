var mysql = require("mysql");

//grant all privileges on copaDataSet.* to admin@'%' identified by 'copadb2020';
//local mysql db connection
var connection = mysql.createConnection({
  host: "copadataset.cdtcpg3ariye.us-east-1.rds.amazonaws.com",
  user: "copadbadmin",
  password: "copadb2020",
  database: "copadbvpc"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;

const { Client } = require("pg");

const client = new Client({
  user: "DB사용자명",
  host: "DB 주소",
  database: "DB명",
  password: "비밀번호",
  port: 5432,
});

client.connect();

client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});

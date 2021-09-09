const { Client } = require("pg");

const client = new Client({
  user: "DB 사용자 명",
  host: "DB 주소",
  database: "DB명",
  password: "비밀번호",
  port: 5432,
});

client.connect();

const sql =
  "INSERT INTO userList (id, name, nickname, email, password, favorite_type, favorite_country) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *";
const values = [
  "id",
  "name",
  "nickname",
  "email",
  "pw",
  "favorite_type",
  "favorite_country",
];

client.query(sql, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows[0]);
  }
});

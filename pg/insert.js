const { Client } = require("pg");

const dbconfig = {
  host: "process.env.DB_HOST",
  user: "process.env.DB_USER",
  password: "process.env.",
  database: "",
  port: "",
};

const client = new Client({
  user: "DB 사용자 명",
  host: "DB 주소",
  database: "DB명",
  password: "비밀번호",
  port: 5432,
});

/* const client = new Client(dbconfig) */

client.connect((err) => {
  if (err) {
    console.error("Failed to connect db due to" + err);
  } else {
    console.log("Connected to DB");
  }
});

/* 정상적으로 연결이 완료되면 선언한 pg client 객체를 이용해 db 쿼리를 날린다.
결과값은 promise의 형태로도 받을 수 있고, 비동기 콜백을 피하기 위해서 await 로 받을 수도 있다. */

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

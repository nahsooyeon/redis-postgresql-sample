module.exports = {
  HOST: "localhost",
  USER: "postgres",
  // password에는 설치할때 설정한 비밀번호 입력!
  PASSWORD: "1234",
  DB: "my_DB",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

/* pool은 옵션 */
/* 
max : Maximum number of connection in pool
min : Minimum number of connection in pool
acquire : The maximum time, in milliseconds, that pool will try to get connection before throwing error
idle : The maximum time, in milliseconds, that a connection can be idle before being released.*/

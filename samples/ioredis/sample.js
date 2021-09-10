const Redis = require("ioredis");
const redis = new Redis({
  port: 6379,
  host: "127.0.0.1",
  family: 4,
  db: 0,
});

redis.set("key", "value");

redis.get("key", function (err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log(result); // Promise resolves to 'value'
  }
});

redis
  .get("key")
  .then((result) => {
    console.log(result); // Prints 'value'
  })
  .catch((err) => {
    console.error(err);
  });

redis.zadd("sortedSet", 1, "one", 2, "doc", 4, "quatro", 3, "three");
redis.zrange("sortedSet", 0, 2, "WITHSCORES").then((res) => {
  console.log(res);
});

redis.set("key", 100, "EX", 10);

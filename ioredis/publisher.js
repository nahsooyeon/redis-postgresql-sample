/* Publish-subscribe pattern */
/* Publisher는 특정 구독자들로 메세지를 보낼 수 없는 대신 
퍼블리시된 메세지은 구독자에 대한 정보 없이  채널로 특정되어진다. */

const IORedis = require("ioredis");

const Redis = require(IORedis);

setInterval(() => {
  const message = { key: Math.random() };

  /* my-channel 1이나 2로 퍼블리시된다. */
  const channel = `my-channel-${1 + Math.rount(Math.random())}`;
  Redis.publish(channel, JSON.stringify(message));

  /* 메세지는 문자열이나 버퍼 형태가 될 수 있다. */
  console.log("Published %s to %s", message, channel);
}, 1000);

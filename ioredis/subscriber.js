const { channel } = require("diagnostics_channel");
const Redis = require("ioredis");
const redis = new Redis();

redis.subscribe("my-channel-1", "my-channel-2", (err, count) => {
  if (err) {
    /* 다른 명령들처럼 subscribe() 도 몇몇 이유들(네트워크 이슈)때문에 실행되지 않을 수 있다.*/

    console.error("Failed to subscribe: %s", err.message);
  } else {
    /* `count`는 클라이언트가 현재 구독할 수 있는 채널 개수를 의미 */
    console.log(
      `Subscribed successfully! This client is currently subscribed to ${count} channels.`
    );
  }
});

redis.on("message", (channel, message) => {
  console.log(`Received ${message} from ${channel}`);
});

/* 'messageBuffer' 라는 이벤트는 'message'와 같지만 
문자열 대신 버퍼를 반환한다. 메세지들이 바이너리 데이터일 때 유용하다.*/

redis.on("messageBuffer", (channel, message) => {
  /* channel과 message 모두 다 버퍼 */
  console.log(channel, message);
});

/* 하나의 레디스 연결은 publish와 subscribe 역할을 함께 할 수 없다. 
특히, 클라이언트에서 subscribe() or psubscribe() 이슈가 있을 때 subscriber 모드가 된다.
유효한 subscription 명령어 : subscribe, psubscribe, unsubscribe, punsubscribe, ping, quit*/

/* 하나의 파일/프로세스에서 pub/sub을 사용하고자 하는 경우, 별도의 연결을 만들어야한다 */
const Redis = require(IORedis);

const sub = new Redis();
const pub = new Redis();

sub.subscribe(/*  */);
sub.on("message" /*  */);

setInterval(() => {
  pub.publish(/*  */);
}, 1000);

import redis from 'redis';

const redisClient = redis.createClient(6379);

redisClient.on('error', (err) => {
  if (err) {
    throw err;
  }
});

export default redisClient;

const config = {
    redis: {
        port: 6379,
        host: "localhost",
        retries: 3,
        time_to_retry: 100,
        time_live: 3600 
    }
}

module.exports = config;
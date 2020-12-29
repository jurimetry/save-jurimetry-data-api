const queuesList = require('./RabbitmqQueues');

module.exports = {
    config: {
        url: process.env.rabbiturl,
        queues: queuesList,
    },
};

const queuesList = require('./RabbitmqQueues');

module.exports = {
    config: {
        url: 'amqps://host',
        queues: queuesList,
    },
};

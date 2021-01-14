const { save } = require('../app/services/JurisprudenceService');

module.exports = [
    {
        name: 'save_jurisprudence',
        durable: false,
        prefetch: 10,
        timeout: 7000,
        noAck: false,
        func(x) {
            save(x)
                .then(() => console.log('Saved'))
                .catch((err) => console.error(err));
        },
    },
];

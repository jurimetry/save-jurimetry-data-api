module.exports = [
    {
        name: 'save_jurisprudence',
        durable: false,
        prefetch: 10,
        timeout: 7000,
        noAck: false,
    },
];
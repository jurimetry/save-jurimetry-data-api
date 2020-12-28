module.exports = {
    apps: [
        {
            name: 'Api',
            script: 'dist/server.js',
            instances: '1',
            autorestart: false,
            args: ['--color'],
            watch: true,
            max_memory_restart: '1G',
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};

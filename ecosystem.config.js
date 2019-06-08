/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
module.exports = {
    apps: [
        {
            name: 'solarpump_prod',
            script: 'server.js',
            log_date_format: "YYYY-MM-DD HH:mm Z",
            watch: false,
            instances: 'max',
            exec_mode: 'cluster',
            env: {
                'NODE_ENV': 'production',
                'TZ': 'Asia/Bangkok'
            }
        },
        {
            name: 'solarpump_dev',
            script: 'server.js',
            log_date_format: "YYYY-MM-DD HH:mm Z",
            watch: false,
            ignore_watch: ['client'],
            env: {
                'NODE_ENV': 'development',
                'TZ': 'Asia/Bangkok'
            },
            env_production: {
                'NODE_ENV': 'production',
                'TZ': 'Asia/Bangkok'
            }
        }
    ],
    deploy: {
        production: {
            user: 'somasri_p',
            host: '35.243.201.124',
            ref: 'origin/master',
            repo: 'git@github.com:ballsurakiat/waterpump-web.git',
            path: '/var/www/html',
            'post-deploy': 'sh $(pwd)/setup.sh'
        }
    }
}

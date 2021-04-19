const serverlessConfiguration = {
    service: 'aws-typescript-api',
    frameworkVersion: '2',
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true,
        },
    },
    plugins: ['serverless-webpack', 'serverless-offline'],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        profile: '',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
        lambdaHashingVersion: '20201221',
    },
    functions: {
        getCityInfo: {
            handler: 'lambdas/getCityInfo.handler',
            events: [
                {
                    http: {
                        path: 'get-item/{item}',
                        method: 'get',
                        cors: true,
                    }
                }
            ]
        }
    },
};
module.exports = serverlessConfiguration;
export {};
//# sourceMappingURL=serverless.js.map
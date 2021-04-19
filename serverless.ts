import type { AWS } from '@serverless/typescript';
import 'reflect-metadata';

const serverlessConfiguration: AWS = {
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
  // import the function via paths
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
    },
    getUserInfo: {
      handler: 'typeOrms/getUserInfo.handler',
      events: [
        {
          http: {
            path: 'get-users/',
            method: 'get',
            cors: true,
          }
        }
      ]
    }
  },
};

module.exports = serverlessConfiguration;

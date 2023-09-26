import dotenv from 'dotenv';
dotenv.config();

const config = {
  integrations: {
    plentysystems: {
      location: '@plentymarkets/shop-api/server',
      configuration: {
        api: {
          url: process.env.API_ENDPOINT ? `${process.env.API_ENDPOINT}` : 'https://yo3qonaed27a.c01-16.plentymarkets.com'
        }
      },
    }
  },
};

export default config;

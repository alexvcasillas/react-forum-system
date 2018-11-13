const isDev = process.env.ENV === 'development';

export const config = {
  port: 8080,
  bodyLimit: '100kb',
  corsHeaders: ['Link'],
  frontendApp: 'http://reactivecommunity.com',
  cookieDomain: isDev ? 'localhost' : '.reactivecommunity.com',
};

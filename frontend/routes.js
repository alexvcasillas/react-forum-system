const nextRoutes = require('next-routes');
/* prettier-ignore */
const routes = require('next-routes')

module.exports = routes()
  .add({
    name: 'write',
    pattern: '/write/:c',
    page: 'write',
  })
  .add({
    name: 'dashboard',
    pattern: '/:c?/:t?',
    page: '',
  });

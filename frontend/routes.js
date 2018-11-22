const nextRoutes = require('next-routes');
/* prettier-ignore */
const routes = module.exports = nextRoutes();

routes.add({ name: 'dashboard', pattern: '/:c?/:t?', page: 'index' });
routes.add({ name: 'write', pattern: '/write/:c', page: 'write' });

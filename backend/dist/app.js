"use strict";

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _chalk = _interopRequireDefault(require("chalk"));

var _db = _interopRequireDefault(require("./db"));

var _config = require("./config");

var _auth = require("./services/auth.service");

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _graphql = require("./graphql/graphql.service");

var _graphql2 = require("./graphql/graphql.loaders");

var _security = require("./graphql/security/security");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('@babel/polyfill');

require('dotenv').config();

var isDev = process.env.ENV === 'development';
var app = (0, _express.default)();
app.server = _http.default.createServer(app); // logger

app.use((0, _morgan.default)('dev')); // 3rd party middleware

app.use((0, _cors.default)({
  exposedHeaders: _config.config.corsHeaders,
  credentials: true,
  origin: isDev ? 'http://localhost:3000' : _config.config.frontendApp
}));
app.use(_bodyParser.default.json({
  limit: _config.config.bodyLimit
}));
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _cookieParser.default)()); // AUTHENTICATION MIDDLEWARE FOR SSR

app.use(function (req, res, next) {
  req.authorization = req.cookies.token || (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null);
  next();
}); // connect to db

(0, _db.default)(function (db) {
  // Auth Service
  var auth = (0, _auth.authService)(); // Import the Secutiry Stuff for Queries and Mutations

  var security = (0, _security.Security)(db, auth);

  var _Loaders = (0, _graphql2.Loaders)({
    db: db
  }),
      UserLoader = _Loaders.UserLoader,
      CommunityLoader = _Loaders.CommunityLoader,
      ThreadLoader = _Loaders.ThreadLoader,
      ReplyLoader = _Loaders.ReplyLoader;

  app.use('/graphql', (0, _expressGraphql.default)(function (request, response) {
    return {
      context: {
        request: request,
        response: response,
        db: db,
        auth: auth,
        security: security,
        loaders: {
          user: UserLoader(),
          community: CommunityLoader(),
          thread: ThreadLoader(),
          reply: ReplyLoader()
        }
      },
      schema: (0, _graphql.GraphQLService)(),
      graphiql: true
    };
  }));
  app.server.listen(process.env.PORT || _config.config.port, function () {
    console.log("[ ".concat(_chalk.default.blue('React Forum System Backend'), " ] Worker process ").concat(_chalk.default.green(process.pid), " started on port ").concat(_chalk.default.green(process.env.PORT || _config.config.port)));
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _db = _interopRequireDefault(require("./db"));

var _middleware = _interopRequireDefault(require("./middleware"));

var _config = _interopRequireDefault(require("./config.json"));

var _auth = require("./services/auth.service");

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _graphql = require("./graphql/graphql.service");

var _graphql2 = require("./graphql/graphql.loaders");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var app = (0, _express.default)();
app.server = _http.default.createServer(app); // logger

app.use((0, _morgan.default)('dev')); // 3rd party middleware

app.use((0, _cors.default)({
  exposedHeaders: _config.default.corsHeaders
}));
app.use(_bodyParser.default.json({
  limit: _config.default.bodyLimit
}));
app.use(_bodyParser.default.urlencoded({
  extended: true
})); // connect to db

(0, _db.default)(function (db) {
  // Auth Service
  var auth = (0, _auth.authService)();
  app.use(function (req, res, next) {
    req.auth = auth;
    return next();
  }); // const { UserLoader, CompanyLoader, EmployeeLoader, WorkshopLoader } = Loaders({ db });

  app.use('/graphql', (0, _expressGraphql.default)(function (req) {
    return {
      context: {
        loaders: {// user: new UserLoader(),
          // company: new CompanyLoader(),
          // employee: new EmployeeLoader(),
          // workshop: new WorkshopLoader(),
        },
        headers: req.headers
      },
      schema: (0, _graphql.GraphQLService)({
        config: _config.default,
        db: db,
        auth: auth
      }),
      graphiql: true // formatError: err => {
      //   return err;
      //   try {
      //     const error = JSON.parse(err.message);
      //     return {
      //       message: error.message,
      //       status: error.status,
      //     };
      //   } catch (error) {
      //     console.log('Error?: ', error);
      //   }
      // },

    };
  }));
  app.server.listen(process.env.PORT || _config.default.port, function () {});
});
var _default = app;
exports.default = _default;
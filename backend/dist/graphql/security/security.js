"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Security = void 0;

var _graphql = require("graphql");

var _responses = require("../utils/responses.utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Security = function Security(db, auth) {
  /**
   * This method ensures that the request is
   * authenticated and valid by getting the headers of the HTTP Request
   * and then verifying the JSON Web Token.
   * @param {Object} HTTP Request Headers
   * @returns {Object} Authentication Object contained within the JWT
   */
  var ensureAuthenticated = function ensureAuthenticated() {
    var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        var verificationResult;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (token) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", reject(false));

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return auth.verifyToken(token);

              case 5:
                verificationResult = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", reject(false));

              case 11:
                return _context.abrupt("return", resolve(verificationResult));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };
  /**
   * This method ensures that the request is
   * authenticated and valid by getting the headers of the HTTP Request
   * and then verifying the JSON Web Token and also check for an ADMIN role account.
   * @param {Object} HTTP Request Headers
   * @returns {Object} Authentication Object contained within the JWT
   */


  var ensureAuthenticatedAdmin = function ensureAuthenticatedAdmin() {
    var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(resolve, reject) {
        var verificationResult, admin;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (token) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", reject(false));

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return auth.verifyToken(token);

              case 5:
                verificationResult = _context2.sent;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", reject(false));

              case 11:
                _context2.next = 13;
                return db.user.find({
                  token: token
                }).lean();

              case 13:
                admin = _context2.sent;

                if (!admin) {
                  _context2.next = 18;
                  break;
                }

                return _context2.abrupt("return", resolve(verificationResult));

              case 18:
                return _context2.abrupt("return", reject(false));

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8]]);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
  /* Returns a Not Authorized Response */


  var onRejectedAuthentication = function onRejectedAuthentication() {
    return new _graphql.GraphQLError((0, _responses.Response)({
      status: 401,
      message: 'Not Authorized'
    }));
  };

  return {
    ensureAuthenticated: ensureAuthenticated,
    ensureAuthenticatedAdmin: ensureAuthenticatedAdmin,
    onRejectedAuthentication: onRejectedAuthentication
  };
};

exports.Security = Security;
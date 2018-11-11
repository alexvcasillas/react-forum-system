"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authService = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Authentication Service
 */
var authService = function authService() {
  return {
    /**
     * Verifies a JSON Web Token
     * @param {string} token
     */
    verifyToken: function verifyToken(token) {
      return new Promise(function (resolve, reject) {
        _jsonwebtoken.default.verify(token, process.env.AUTH_SECRET, {
          ignoreExpiration: true
        }, function (error, decoded) {
          if (error) return reject("Verify Token Error: ".concat(error.message));
          if (decoded) return resolve(decoded);
        });
      });
    },

    /**
     * Generates a new JSON Web Token based on the given payload
     * @param {object} payload
     */
    generateToken: function generateToken(payload) {
      return new Promise(function (resolve, reject) {
        var token = _jsonwebtoken.default.sign(payload, process.env.AUTH_SECRET);

        if (!token) return reject("An error ocurred while generating the token");
        return resolve(token);
      });
    }
  };
};

exports.authService = authService;
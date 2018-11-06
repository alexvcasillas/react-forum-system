import jwt from 'jsonwebtoken';

/**
 * Authentication Service
 */
export const authService = () => ({
  /**
   * Verifies a JSON Web Token
   * @param {string} token
   */
  verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.AUTH_SECRET, { ignoreExpiration: true }, (error, decoded) => {
        if (error) return reject(`Verify Token Error: ${error.message}`);
        if (decoded) return resolve(decoded);
      });
    });
  },
  /**
   * Generates a new JSON Web Token based on the given payload
   * @param {object} payload
   */
  generateToken(payload) {
    return new Promise((resolve, reject) => {
      const token = jwt.sign(payload, process.env.AUTH_SECRET);
      if (!token) return reject(`An error ocurred while generating the token`);
      return resolve(token);
    });
  },
});

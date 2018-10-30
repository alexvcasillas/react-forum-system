import { GraphQLError } from 'graphql';
import { Response } from '../utils/responses.utils';

export const Security = (db, auth) => {
  /**
   * This method ensures that the request is
   * authenticated and valid by getting the headers of the HTTP Request
   * and then verifying the JSON Web Token.
   * @param {Object} HTTP Request Headers
   * @returns {Object} Authentication Object contained within the JWT
   */
  const ensureAuthenticated = (token = null) =>
    new Promise(async (resolve, reject) => {
      if (!token) {
        return reject(false);
      }
      let verificationResult;
      try {
        verificationResult = await auth.verifyToken(token);
      } catch (error) {
        return reject(false);
      }
      return resolve(verificationResult);
    });

  /**
   * This method ensures that the request is
   * authenticated and valid by getting the headers of the HTTP Request
   * and then verifying the JSON Web Token and also check for an ADMIN role account.
   * @param {Object} HTTP Request Headers
   * @returns {Object} Authentication Object contained within the JWT
   */
  const ensureAuthenticatedAdmin = (token = null) =>
    new Promise(async (resolve, reject) => {
      if (!token) {
        return reject(false);
      }
      let verificationResult;
      try {
        verificationResult = await auth.verifyToken(token);
      } catch (error) {
        return reject(false);
      }
      // Verify here for ADMIN permissions
      const admin = await db.user.find({ token: token }).lean();
      if (admin) return resolve(verificationResult);
      else return reject(false);
    });
  /* Returns a Not Authorized Response */
  const onRejectedAuthentication = () => new GraphQLError(Response({ status: 401, message: 'Not Authorized' }));
  return {
    ensureAuthenticated,
    ensureAuthenticatedAdmin,
    onRejectedAuthentication,
  };
};

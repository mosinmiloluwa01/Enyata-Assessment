import validator from 'validatorjs';
import redisClient from '<server>/redisServer';


/**
 * @param {object} inputObject
 * @return {object} sanitized data
 */
export const trimAndConvertToLowercase = (inputObject) => {
  const sanitizedData = {};
  Object.entries(inputObject).forEach((element) => {
    const key = element[0];
    const value = element[1];
    sanitizedData[key] = value.replace(/\s/g, '').toLowerCase();
  });
  return sanitizedData;
};

/**
 * @param {object} data
 * @param {object} rules
 * @param {object} res
 * @return {object} response
 */
export const checkValidation = (data, rules) => {
  const validation = new validator(data, rules);

  return validation.passes() ? true : validation.errors.all();
};

/**
 * @param {object} res
 * @param {integer} statusCode
 * @param {object} dataObject
 * @return {object} response
 */
export const displayMessage = (res, statusCode, dataObject) => res.status(statusCode).json({
  status: statusCode < 300 ? 'success' : 'error',
  ...dataObject,
});

export const getCachedData = (key) => {
  redisClient.get(key, (err, cachedData) => {
    if (err) {
      throw err;
    }
    if (cachedData !== null) {
      return cachedData;
    }
    return null;
  });
};

export const createCacheData = (key, duration, data) => {
  try {
    redisClient.setex(key, duration, JSON.stringify(data));
  } catch (error) {
    throw error.message;
  }
};

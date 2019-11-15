/* eslint-disable import/prefer-default-export */
import { checkValidation, displayMessage } from '<helpers>/utils';

export const validateIdParams = (req, res, next) => {
  let validationData, data, rules;
  const { id } = req.params;

  if (req.params.categoryId) {
    const { categoryId } = req.params;
    data = { categoryId };
    rules = { categoryId: 'required|integer' };
    validationData = checkValidation(data, rules);
  }

  if (id) {
    data = { id };
    rules = { id: 'required|integer' };
    validationData = checkValidation(data, rules);
  }
  if (validationData !== true) {
    return displayMessage(res, 400, { message: 'parameter validation error occured', errors: validationData });
  }
  next();
};

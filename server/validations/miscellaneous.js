/* eslint-disable import/prefer-default-export */
import { checkValidation, displayMessage } from '<helpers>/utils';

export const validateIdParams = (req, res, next) => {
  const { id } = req.params;

  const data = { id };
  const rules = {
    id: 'required|integer',
  };
  const validationData = checkValidation(data, rules);

  if (validationData !== true) {
    return displayMessage(res, 400, { message: 'parameter validation error occured', errors: validationData });
  }
  next();
};

import { checkValidation, displayMessage } from '<helpers>/utils';

export const validateCategoryInput = (req, res, next) => {
  const { name } = req.body;

  const data = { name: name ? name.trim() : '' };
  const rules = {
    name: 'required|string|min:2',
  };

  const validationData = checkValidation(data, rules);
  if (validationData !== true) {
    return displayMessage(res, 400, { message: 'validation error occured', errors: validationData });
  }
  req.body = { name: name.trim() };
  next();
};

export const validateBookCategoryInput = (req, res, next) => {
  const { bookId } = req.body;

  const data = { bookId };
  const rules = {
    bookId: 'required|integer',
  };

  const validationData = checkValidation(data, rules);
  if (validationData !== true) {
    return displayMessage(res, 400, { message: 'validation error occured', errors: validationData });
  }
  next();
};

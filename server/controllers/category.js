import { displayMessage } from '<helpers>/utils';
import {
  createACategory,
  getAllCategories,
  updateACategory,
  deleteACategory,
  AddABookToACategory,
  getBooksInACategory,
} from '<services>/category';

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const data = { name };
    const category = await createACategory(data);
    return displayMessage(res, 201, { message: 'category created successfully', data: category });
  } catch (error) {
    return displayMessage(res, 500, { message: 'a server error has occured', error });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();
    return displayMessage(res, 200, { message: 'category retrieved successfully', data: categories });
  } catch (error) {
    return displayMessage(res, 500, { message: 'a server error has occured', error });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await updateACategory(req.params.id, req.body.name);
    if (category[0] === 0) {
      return displayMessage(res, 404, { message: 'category not found' });
    }
    return displayMessage(res, 200, { message: 'category updated successfully' });
  } catch (error) {
    return displayMessage(res, 500, { message: 'a server error has occured', error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await deleteACategory(req.params.id);
    if (category === 0) {
      return displayMessage(res, 404, { message: 'category not found' });
    }
    return displayMessage(res, 200, { message: 'category deleted successfully' });
  } catch (error) {
    return displayMessage(res, 500, { message: 'a server error has occured', error });
  }
};

export const AddABookToCategory = async (req, res) => {
  try {
    const { bookId } = req.body;
    const { categoryId } = req.params;
    const book = await AddABookToACategory(categoryId, bookId);
    return displayMessage(res, 201, { message: 'books retrieved successfully', data: book });
  } catch (error) {
    return displayMessage(res, 500, { message: 'a server error has occured', error });
  }
};

export const getBooksInCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const book = await getBooksInACategory(categoryId);
    return displayMessage(res, 200, { message: 'the book has been added successfully', data: book });
  } catch (error) {
    return displayMessage(res, 500, { message: 'a server error has occured', error });
  }
};

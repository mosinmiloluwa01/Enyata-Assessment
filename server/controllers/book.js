import { displayMessage } from '<helpers>/utils';
import {
  createABook, getAllBooks, updateABook, deleteABook
} from '<services>/book';

export const createBook = async (req, res) => {
  try {
    const { name } = req.body;
    const data = { name };
    const book = await createABook(data);
    return displayMessage(res, 201, { message: 'book created successfully', data: book });
  } catch (error) {
    return displayMessage(res, 500, { message: 'a server error has occured', error });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await getAllBooks();
    return displayMessage(res, 200, { message: 'book retrieved successfully', data: books });
  } catch (error) {
    return displayMessage(res, 500, { message: 'a server error has occured', error });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await updateABook(req.params.id, req.body.name);
    if (book[0] === 0) {
      return displayMessage(res, 404, { message: 'book not found' });
    }
    return displayMessage(res, 200, { message: 'book updated successfully' });
  } catch (error) {
    return displayMessage(res, 500, { message: 'a server error has occured', error });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await deleteABook(req.params.id);
    if (book === 0) {
      return displayMessage(res, 404, { message: 'book not found' });
    }
    return displayMessage(res, 200, { message: 'book deleted successfully' });
  } catch (error) {
    return displayMessage(res, 500, { message: 'a server error has occured', error });
  }
};

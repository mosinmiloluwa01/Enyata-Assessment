import express from 'express';
import {
  createCategory, getCategories, updateCategory, deleteCategory, AddABookToCategory, getBooksInCategory
} from '<controllers>/category';
import { validateCategoryInput, validateBookCategoryInput } from '<validations>/category';
import { validateIdParams } from '<validations>/miscellaneous';

const router = express.Router();

router.post('/', validateCategoryInput, createCategory);
router.post('/:categoryId/book', validateIdParams, validateBookCategoryInput, AddABookToCategory);
router.get('/:categoryId/books', validateIdParams, getBooksInCategory);
router.get('/', getCategories);
router.put('/:id', validateIdParams, updateCategory);
router.delete('/:id', validateIdParams, deleteCategory);

export default router;

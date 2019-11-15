import express from 'express';
import {
  createBook, getBooks, updateBook, deleteBook
} from '<controllers>/book';
import { validateCategoryInput } from '<validations>/category';
import { validateIdParams } from '<validations>/miscellaneous';

const router = express.Router();

router.post('/', validateCategoryInput, createBook);
router.get('/', getBooks);
router.put('/:id', validateIdParams, updateBook);
router.delete('/:id', validateIdParams, deleteBook);

export default router;

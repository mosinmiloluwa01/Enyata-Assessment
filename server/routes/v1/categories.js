import express from 'express';
import {
  createCategory, getCategories, updateCategory, deleteCategory
} from '<controllers>/category';
import validateCategoryInput from '<validations>/category';
import { validateIdParams } from '<validations>/miscellaneous';


const router = express.Router();

router.post('/', validateCategoryInput, createCategory);
router.get('/', getCategories);
router.put('/:id', validateIdParams, updateCategory);
router.delete('/:id', validateIdParams, deleteCategory);

export default router;

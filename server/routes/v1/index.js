import express from 'express';
import categories from './categories';
import books from './books';

const router = express.Router();

router.use('/categories', categories);
router.use('/books', books);

export default router;

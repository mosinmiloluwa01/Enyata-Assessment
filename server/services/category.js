/* eslint-disable eqeqeq */
import model from '<models>';

const { Category, Book } = model;

export const createACategory = async (data) => {
  try {
    const category = await Category.create(data);
    return category;
  } catch (error) {
    throw error.message;
  }
};

export const getAllCategories = async () => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name']
    });
    return categories;
  } catch (error) {
    throw error.message;
  }
};

export const updateACategory = async (id, name) => {
  try {
    const category = await Category.update(
      { name },
      { where: { id } }
    );
    return category;
  } catch (error) {
    throw error.message;
  }
};

export const deleteACategory = async (id) => {
  try {
    const category = await Category.destroy(
      { where: { id } }
    );
    return category;
  } catch (error) {
    throw error.message;
  }
};

export const AddABookToACategory = async (categoryID, bookID) => {
  try {
    const category = await Category.findByPk(categoryID);
    const book = await Book.findByPk(bookID);
    if (!category || !book) {
      throw new Error('either category or book is not found');
    }
    // Object.keys(book.__proto__) is used to check the magic functions on a model;
    const getbookCategory = await book.getBookCategories();

    const bookOrCategoryExists = getbookCategory
      && getbookCategory.find(data => data.dataValues.BookCategory.dataValues.bookId == bookID
      && data.dataValues.BookCategory.dataValues.categoryId == categoryID);

    if (bookOrCategoryExists) {
      throw new Error('book already exists in this category');
    }

    const bookCategory = await book.addBookCategory(categoryID);
    return bookCategory;
  } catch (error) {
    throw error.message;
  }
};

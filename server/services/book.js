import model from '<models>';

const { Book } = model;

export const createABook = async (data) => {
  try {
    const book = await Book.create(data);
    return book;
  } catch (error) {
    throw error.message;
  }
};

export const getAllBooks = async () => {
  try {
    const books = await Book.findAll({
      attributes: ['id', 'name']
    });
    return books;
  } catch (error) {
    throw error.message;
  }
};

export const updateABook = async (id, name) => {
  try {
    const book = await Book.update(
      { name },
      { where: { id } }
    );
    return book;
  } catch (error) {
    throw error.message;
  }
};

export const deleteABook = async (id) => {
  try {
    const book = await Book.destroy(
      { where: { id } }
    );
    return book;
  } catch (error) {
    throw error.message;
  }
};

const book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'name is required.'
        }
      }
    }
  }, {});
  Book.associate = (models) => {
    Book.belongsToMany(models.Category, {
      through: 'BookCategory',
      as: 'BookCategories',
      foreignKey: 'bookId',
      otherKey: 'categoryId'
    });
  };
  return Book;
};

export default book;

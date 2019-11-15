const category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'name is required.'
        }
      }
    },
  }, {});
  Category.associate = (models) => {
    Category.belongsToMany(models.Book, {
      through: 'BookCategory',
      as: 'Books',
      foreignKey: 'categoryId',
      otherKey: 'bookId'
    });
  };
  return Category;
};

export default category;

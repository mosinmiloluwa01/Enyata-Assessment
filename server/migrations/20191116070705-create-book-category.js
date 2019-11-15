module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BookCategory', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    categoryId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
        as: 'categoryId'
      }
    },
    bookId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Books',
        key: 'id',
        as: 'bookId'
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('BookCategory')
};

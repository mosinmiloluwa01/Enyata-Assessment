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
  Category.associate = () => {};
  return Category;
};

export default category;

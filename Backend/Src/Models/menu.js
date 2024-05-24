module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      option: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Menu;
  };
  
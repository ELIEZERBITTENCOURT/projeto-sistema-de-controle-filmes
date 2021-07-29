const { Model, DataTypes } = require('sequelize');

class Films extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'films',
    })
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'film_id', through: 'user_film', as: 'users' });
  }
}

module.exports = Films;
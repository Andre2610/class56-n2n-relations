'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: 'buyerId', as: 'buyer' });
      this.belongsTo(models.user, { foreignKey: 'sellerId', as: 'seller' });
      this.belongsToMany(models.product, {
        through: 'orderProducts',
        foreignKey: 'orderId',
      });
    }
  }
  order.init(
    {
      total: DataTypes.FLOAT,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'order',
    }
  );
  return order;
};

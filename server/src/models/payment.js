const { DataTypes, Model } = require('sequelize');

class Payment extends Model {
  static initialize(sequelize) {
    super.init(
      {
        user_no: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        payment_tpye: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        modelName: 'Payment',
        tableName: 'user_payment_type',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
}

module.exports = Payment;

const { DataTypes, Model } = require('sequelize');

class Transaction extends Model {
  static initialize(sequelize) {
    super.init(
      {
        no: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        type: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        category: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        payment_type: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        user_no: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        date: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        modelName: 'Transaction',
        tableName: 'transaction',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
}

module.exports = Transaction;

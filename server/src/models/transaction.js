const { DataTypes, Model, Op } = require('sequelize');

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

  static async insertTransaction(options) {
    const transaction = await this.create(options);
    return transaction;
  }

  static async updateTransaction(options, target) {
    const transaction = await this.update(options, { where: target });
    return transaction;
  }

  static async deleteTransaction(target) {
    const transaction = await this.destroy({ where: target });
    return transaction;
  }

  static async getTransactionsByOption(options) {
    const where = this.parseOptions(options);
    const transactions = await this.findAll({
      attributes: [
        'no',
        'type',
        'category',
        'price',
        'content',
        'payment_type',
        'user_no',
        'date',
      ],
      where,
      raw: true,
    });
    return transactions;
  }

  static parseOptions(options) {
    const where = {};
    const { type, date } = options;
    if (type) where.type = this.parseOption('eq', type);
    if (date) where.date = this.parseOption('eq', date);
    return where;
  }

  static parseOption(operator, value) {
    return {
      [Op[`${operator}`]]: value,
    };
  }
}

module.exports = Transaction;

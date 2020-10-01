const { DataTypes, Model } = require('sequelize');

class Code extends Model {
  static initialize(sequelize) {
    super.init(
      {
        no: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        code_nm: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        parent: {
          type: DataTypes.INTEGER,
        },
      },
      {
        modelName: 'Code',
        tableName: 'code',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
}

module.exports = Code;

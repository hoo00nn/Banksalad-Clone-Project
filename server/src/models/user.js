const { DataTypes, Model } = require('sequelize');

class User extends Model {
  static initialize(sequelize) {
    super.init(
      {
        no: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        modelName: 'User',
        tableName: 'user',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Transaction, {
      foreignKey: 'user_no',
      sourceKey: 'no',
      onDelete: 'cascade',
    });
    this.hasMany(models.Payment, {
      foreignKey: 'user_no',
      onDelete: 'cascade',
    });
  }

  static async insertUser(options) {
    const [user, isCreated] = await this.findOrCreate({
      where: { user_id: options.username },
      defaults: {
        user_id: options.username,
        password: options.password,
      },
    });
    return isCreated;
  }
}

module.exports = User;

'use strict';
import { DataTypes, Model, Sequelize } from 'sequelize';

interface UserAttributes {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  role?: string;
}

class User extends Model<UserAttributes> {
  public firstname?: string;
  public lastname?: string;
  public email?: string;
  public password?: string;
  public role?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    this.hasMany(models.Ticket, {
      foreignKey: 'userID',
      as: 'user'
    });
  }
}

export const initUserModel = (sequelize: Sequelize) => {
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });

  return User;
};

export { User };

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,   
  },{
    underscored: true,
    modelName: 'User',
    timestamps: false,
    tableName: 'users',
  })

  User.associate = ({ Sale }) => {
    User.hasMany(Sale, {
      as: 'customers',
      foreignKey: 'userId'
    });

    User.hasMany(Sale, {
      as: 'sales',
      foreignKey: 'sellerId',
      })
    }

  return User;
};
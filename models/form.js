'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    
    static associate(models) {
      Form.belongsTo(models.User)
      Form.hasMany(models.FormQuestion)
    }
  };
  Form.init({
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Form',
  });
  return Form;
};
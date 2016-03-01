'use strict';


module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    CustomerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Company: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Country: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Fax: DataTypes.STRING,
    Email: DataTypes.STRING,
    SupportRepId: DataTypes.INTEGER
  }, {
    tableName: 'Customer',
    timestamps: false,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Customer.hasMany(models.Invoice, {foreignKey: 'CustomerId'});
      }
    }
  });

  return Customer;
};

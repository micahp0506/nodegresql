'use strict';


module.exports = function (sequelize, DataTypes) {
  const Employee = sequelize.define('Employee', {
    EmployeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Title: DataTypes.STRING,
    ReportsTo: DataTypes.STRING,
    BirthDate: DataTypes.DATE,
    HireDate: DataTypes.DATE,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Country: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Fax: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    tableName: 'Employee',
    timestamps: false,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Employee.belongsTo(Employee, {as: 'Boss', foreignKey: 'ReportsTo'});
        Employee.hasMany(models.Customer, {as: 'Customers', foreignKey: 'SupportRepId'});
      }
    }
  });

  return Employee;
};

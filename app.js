  // 'use strict';



  // const Sequelize = require('sequelize');
  // const sequelize = new Sequelize('postgres://localhost:5432/nodegresql');

  // const Frienemy = sequelize.define('frienemies', {
  //   name: Sequelize.STRING,
  //   birthday: Sequelize.DATE,
  //   friend: Sequelize.BOOLEAN
  // });

  // const Project = sequelize.define('projects', {
  //     name: Sequelize.STRING
  // });

  // Project.hasMany(Frienemy, {as: 'Workers'});
  // // If your changing schema, you have to be handle that
  // sequelize.sync().then(() => {
  //   return Frienemy.create({
  //     name: 'Jane Doe',
  //     birthday: new Date('1980-3-4')
  //   });
  // }).then((frienemy) => {
  //   console.log(frienemy.get({
  //     // Returns plain JSON
  //     plain: true
  //   }));
  // }).then(() => {
  //     return Project.create({
  //         name: 'Angular 101'
  //     });
  // }).then(() => {

  // })


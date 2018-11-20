const Sequelize = require('sequelize');
const db = require('./database');
const Coffee = require('./coffee.model');

const Pug = db.define('pugs', {
  // your code here
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  biography: {
    type: Sequelize.TEXT,
  },
});

Pug.prototype.isPuppy = function () {
  return this.age < 1;
};

Pug.prototype.shortBio = function () {
  let delimiter;
  if (this.biography.indexOf('?') !== -1) delimiter = '?';
  else if (this.biography.indexOf('!') !== -1) delimiter = '!';
  else delimiter = '.';

  return this.biography.split(delimiter)[0];
};

module.exports = Pug;

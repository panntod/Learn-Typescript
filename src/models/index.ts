// index.ts
'use strict';

import fs from 'fs';
import path from 'path';
import { DataTypes, Sequelize } from 'sequelize';
import process from 'process';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

import * as models from './models';

const config = require(__dirname + '/../config/config.json')[env];
const db: any = {};

let sequelize: Sequelize;

sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts' && 
      file.indexOf('.test.ts') === -1
    );
  })
  .forEach(file => {
    const modelName = file.replace('.ts', '');
    const model = models[modelName](sequelize, Sequelize.DataTypes);
    db[modelName] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

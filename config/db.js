const { Sequelize } = require('sequelize')

const productModel = require('../models/product.js')
const reviewModel = require('../models/review.js')
const userModel = require('../models/user.js')
const orderModel = require('../models/order.js')

const sequelize = new Sequelize(
  'Store',
  'root',
  '2940',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 33061,
    logging: true
  }
)
const models = [ productModel, reviewModel, userModel, orderModel ]

for(let model of models){
  model(sequelize)
}

// Configuring relations
const { products, reviews, users, orders } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table
orders.belongsTo(users); // Relation: Order has one user
orders.belongsTo(products); // Relation: Order has one product

module.exports = sequelize
//models/Expense.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({

});

module.exports = mongoose.model('Expense', expenseSchema);
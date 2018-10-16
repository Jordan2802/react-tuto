// ServerPort.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort = new Schema({
  age: {
    type: Number
  },
  name: {
    type: String
  },
  type: {
      type: String
  }
  
},{
    collection: 'servers'
});

module.exports = mongoose.model('ServerPort', ServerPort);

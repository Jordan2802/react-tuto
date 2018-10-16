// ServerProject.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerProject = new Schema({
  
  title: {
    type: String
  },
  description: {
    type: String
  },
  author: {
      type: String
  }
},{
    collection: 'projects'
});

module.exports = mongoose.model('ServerProject', ServerProject);

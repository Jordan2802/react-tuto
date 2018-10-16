// ServerProjectRouter.js

const express = require('express');
const app = express();
const ServerProjectRouter = express.Router();

const ServerProject = require('../models/ServerProject');

ServerProjectRouter.route('/add').post(function (req, res) {
  const serverproject = new ServerProject(req.body);
  serverproject.save()
    .then(ServerProject => {
        res.json('User added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

ServerProjectRouter.route('/').get(function (req, res) {
    ServerProject.find(function (err, serverprojects){
  if(err){
    console.log(err);
  }
  else {
    res.json(serverprojects);
  }
});
});

ServerProjectRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  ServerProject.findById(id, function (err, ServerProject){
      res.json(ServerProject);
  });
});

ServerProjectRouter.route('/update/:id').post(function (req, res) {
    ServerProject.findById(req.params.id, function(err, ServerProject) {
    if (!ServerProject)
      return (new Error('Could not load Document'));
    else {
      // do your updates here
      ServerProject.title = req.body.title;
      ServerProject.description = req.body.description;
      ServerProject.author = req.body.author;

      ServerProject.save().then(ServerProject => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

ServerProjectRouter.route('/delete/:id').get(function (req, res) {
    ServerProject.findByIdAndRemove({_id: req.params.id},
       function(err, ServerProject){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ServerProjectRouter;

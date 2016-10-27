const TodoModel = require('./todoModel');

const todoController = {
  create: (req, res, next) => {
    TodoModel.create(req.body, function (err) {
      if (err) return console.error(err);
    });
  }
  // },
  // find: (req, res, next) => {
  //   console.log('inside find');
  //   TodoModel.find({}, function (err, todos) {
  //     if (err) return console.error(err);
  //     res.send(todos);
  //   });
  // }
}

module.exports = todoController;
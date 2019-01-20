const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'GET /user/:id': 'UserController.getUserById',
};

module.exports = privateRoutes;

const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'GET /user/:id': 'UserController.getUserById',
  'GET /tutorUsers': 'UserController.getAllTutorUser',
};

module.exports = privateRoutes;

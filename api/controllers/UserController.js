const User = require('../models/User');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');
const nanoid = require('nanoid');

const UserController = () => {
  const register = async (req, res) => {
    const { body } = req;
    if (body.password === body.password2) {
      try {
        const checkEmail = await User.findOne({
          where: {
            email: body.email,
          },
        });

        if (checkEmail) {
          // Duplicate email
          return res.status(400).json({ msg: 'Bad Request: User has already existed' });
        }

        const user = await User.create({
          user_id: nanoid(),
          username: body.username,
          email: body.email,
          password: body.password,
          school: body.school,
          type: body.type,
        });
        const token = authService().issue({ id: user.id });

        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const user = await User
          .findOne({
            where: {
              email,
            },
          });

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }

        if (bcryptService().comparePassword(password, user.password)) {
          const token = authService().issue({ id: user.id });

          return res.status(200).json({ token, user });
        }

        return res.status(401).json({ msg: 'Unauthorized' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const getAll = async (req, res) => {
    try {
      const users = await User.findAll();

      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({
        where: {
          user_id: id,
        },
      });
      return res.status(200).json({ user });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getAllTutorUser = async (req, res) => {
    try {
      const tutors = await User.findAll({
        where: {
          type: 'tutor',
        },
      });
      return res.status(200).json({ tutors });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  return {
    register,
    login,
    validate,
    getAll,
    getUserById,
    getAllTutorUser,
  };
};

module.exports = UserController;

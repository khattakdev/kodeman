const express = require('express');
const jwt = require('jsonwebtoken');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const Users = require('../model/users');

const router = express.Router();
const isAuth = require('../Middleware/auth');

router.get('/login', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    let item = await Users.find({ email });

    if (item.length === 0) {
      return res.status(401).json({
        error: ['Record not found'],
      });
    }

    if (item.password !== password) {
      return res.status(401).json({
        error: ['Invalid password'],
      });
    }

    const token = jwt.sign(
      {
        id: item.id,
        email,
      },
      'secretKey',
      {
        expiresIn: '30d',
      }
    );

    res.status(200).json({
      item,
      token,
    });
  } catch (err) {
    return console.log(err);
  }
});

module.exports = router;

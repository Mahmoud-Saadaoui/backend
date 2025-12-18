const express = require('express')
const User = require("../models/userModel")
const {  validationResult } = require('express-validator')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

// @route   POST api/users/register
// @desc    Register new user
// @access  Public
const registerUserCtr = async(req, res) => {
    // validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const { name, email, password } = req.body

    try {
        let user = await User.findOne({ email })
        // Check if user exist
        if (user) {
            return res.status(400).json({errors: [{msg: 'User already exists'}]})
        }

        const salt = await bcrypt.genSalt(10)

        user = new User({
            name,
            email,
            password: await bcrypt.hash(password, salt)
        })
        await user.save()
        res.send("user created successfully")
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
}

// @route   POST api/users/register
// @desc    Login user
// @access  Public
const loginUserCtr = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = req.body;

  try {
    const user = await User.findOne({ email: data.email });
    if (!user) {
      res.status(404).send("invalid email or password");
    } else {
      validPass = bcrypt.compareSync(data.password, user.password);
      if (!validPass) {
        res.status(401).send("invalid email or password");
      } else {
        payload = {
          _id: user._id,
          email: user.email,
          name: user.name,
        };
        token = jwt.sign(payload, "123456");
        res.status(200).send({ mytoken: token });
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

// @route   GET api/users/allUsers
// @desc    Get All Users
// @access  Public
const getAllUsers = async(req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.send(error)
    }
}

// @route   GET api/users/userId
// @desc    Get User By Id
// @access  Public
const getUserById = async(req, res) => {
    try {
        const my_id = req.params.id
        const user = await User.findById(my_id)
        res.send(user)
    } catch (error) {
        res.send(error)
    }
}

// @route   DELETE api/users/remove/:id
// @desc    Delete User
// @access  Public
const removeUser = async(req, res) => {
    try {
        const id = req.params.id
        deleted = await User.findOneAndDelete({_id: id})
        res.send(deleted)
    } catch (error) {
        res.send(error)
    }
}

// @route   PUT api/users/update/:id
// @desc    Update User
// @access  Public
const updateUser = async(req, res) => {
    try {
        const id = req.params.id;
        const newUser = req.body;
        updated = await User.findOneAndUpdate({ _id: id }, newUser);
        res.send(updated);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    registerUserCtr,
    loginUserCtr, 
    getAllUsers,
    getUserById,
    removeUser,
    updateUser
}
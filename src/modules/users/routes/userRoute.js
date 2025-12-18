const express = require('express')
const router = express.Router()
const { registerUserCtr, loginUserCtr, getAllUsers, removeUser, updateUser } = require('../controllers/userCtr')
const { check } = require('express-validator')

router.post("/register", [
    check('name', 'Name is required with less than 30 characters').not().isEmpty().isLength({max: 30}),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6}),
], registerUserCtr)

router.post("/login", [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6}),
], loginUserCtr)

router.get("allUsers", getAllUsers)

router.get("userId/:id", getAllUsers)

router.delete("/remove/:id" , removeUser)

router.delete("/update/:id" , updateUser)

module.exports = router
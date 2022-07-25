// const { request, response } = require('express');
// const express = require('express');
// const router = express.Router();
// const uuid = require('uuid');

const { validateLoginData } = require('../util/validators');

const members = require("../../Members");

exports.loginUser = (request, response) => {
    const lmember = {
        email: request.body.email,
        password: request.body.password

    }
    let password = '';
    const found = members.some(member => member.email === lmember.email);
    const { valid, errors } = validateLoginData(lmember);
    if (!valid) return response.status(400).json(errors);
    // if (!lmember.email || !lmember.password) {
    //     return response.status(400).json({ msg: 'please check again' })
    // }
    members.forEach(member => {
        if (member.email === lmember.email && member.password === lmember.password) {
            password = member.password;
            response.json({ msg: 'Member login' });
        }
    })

    if (found && lmember.password !== password) {
        return response.status(403).json(
            {
                general: 'wrong credentials, please try again'
            }
        );
    }

};
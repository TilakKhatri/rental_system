const express = require('express');
const db = require('../db');

const login = (req, res) => {
    db.query("SELECT * FROM admin WHERE email=? AND password=?", [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json(err);
        if (data.length == 0) return res.status(404).json("user not found.");
        req.session.user = data;
        res.send(req.session.user[0].Email);
        // res.status(200).json('successfully logged in.')

    })
}

const getUser = (req, res) => {
    // console.log(req.session)
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
}

const logout = (req, res) => {
    console.log('clicked')
    // req.session.destroy((err) => {
    //     console.log('logout')
    // });
}


module.exports = { login, logout, getUser }
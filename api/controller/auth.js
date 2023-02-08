const express = require('express');
const db = require('../db');

const login = (req, res) => {
    db.query("SELECT * FROM admin WHERE email=?", [req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length == 0) return res.status(404).json("Email doesn't exits.");
        req.session.user = data;
        console.log(req.session.user);
        res.send(data)

    })
}

const getUser = (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
}

const logout = (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/')
    });
}


module.exports = { login, logout, getUser }
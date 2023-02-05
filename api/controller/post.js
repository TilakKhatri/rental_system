const db = require('../db');

const getPosts = (req, res) => {
    db.query("SELECT * FROM products", (err, data) => {
        if (err) return res.status(404).json("Not Found");
        return res.status(200).json(data);
    })
}
const getPost = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM products WHERE Pid=?", id, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    })

}
const addPost = (req, res) => {
    const addProduct = "INSERT INTO products(Pimg,Pname,Pdesc,Numberplate,price_per_day) values(?,?,?,?,?)"
    const values = [
        req.body.Pimg,
        req.body.Pname,
        req.body.Pdesc,
        req.body.Numberplate,
        req.body.price_per_day
    ];
    db.query(addProduct, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Product has been added.");
    });
}
const updatePost = (req, res) => {

    const updateProduct = "UPDATE products SET Pimg=?,Pname=?,Pdesc=?,Numberplate=?,price_per_day=? WHERE Pid=?";
    const values = [
        req.body.Pimg,
        req.body.Pname,
        req.body.Pdesc,
        req.body.Numberplate,
        req.body.price_per_day
    ];
    db.query(updateProduct, [...values, req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Product has been updated.");
    })

}
const deletePost = (req, res) => {
    // console.log(req.params.id)
    const deleteProduct = "DELETE FROM products WHERE Pid=?";
    db.query(deleteProduct, req.params.id, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Product has been deleted.");
    })

}

const searchData = (req, res) => {
    let search = req.query.search;
    const searchRecord = `SELECT * FROM products WHERE (Pname LIKE "${search}" OR Pdesc LIKE "${search}")`;

    db.query(searchRecord, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("searching");
    })
}

module.exports = { getPosts, getPost, addPost, updatePost, deletePost, searchData };
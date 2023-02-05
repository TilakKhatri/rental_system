const db = require('../db');

const getUsers = (req, res) => {

    db.query("SELECT Uid, Pid,Fullname,Email,Phonenumber,Address,DATE_FORMAT(Bookdate,'%Y-%m-%d') as bd,DATE_FORMAT(Returndate,'%Y-%m-%d') as rd FROM users_booked_bike", (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

const addBooking = (req, res) => {
    const insertQuery = "INSERT INTO users_booked_bike(Pid,Fullname,Email,Phonenumber,Address,Bookdate,Returndate) values(?,?,?,?,?,?,?)";

    const values = [
        req.body.Pid,
        req.body.fullname,
        req.body.email,
        req.body.phonenumber,
        req.body.address,
        req.body.bookdate,
        req.body.returndate
    ];
    db.query(insertQuery, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("You booked this product.");
    });
}
const removeBookingusers = (req, res) => {
    const deleteProduct = "DELETE FROM users_booked_bike WHERE Uid=?";
    db.query(deleteProduct, req.params.id, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been deleted.");
    })
}


module.exports = { addBooking, removeBookingusers, getUsers };
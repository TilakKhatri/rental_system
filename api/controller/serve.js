const db = require('../db');

const getAll = (req, res) => {
    db.query("SELECT * FROM booked", (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

const addRec = (req, res) => {
    db.query("INSERT INTO booked (Pid,Pimg,Pname,Numberplate,Price,Username,email,phone,Address,Bookdate,Returndate) select p.Pid,Pimg,Pname,Pdesc,Numberplate,price_per_day,u.Fullname,u.Email,u.Phonenumber,u.Address,u.Bookdate,u.Returndate from products as p inner join users_booked_bike as u on p.Pid = u.Pid where u.Uid=?", [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json('Added to served');
    })
}

const served = (req, res) => {
    db.query("DELETE FROM booked WHERE Pid=?", [req.body.params], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json('Sucessfully served.');
    })
}


module.exports = { getAll, served, addRec };

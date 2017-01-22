var express = require('express');
var router = express.Router();
var User = require('../model/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
    var user = new User(
        {
            username: 'John',
            passwd: 'abc'

        });

    user.save(function (err) {
        if (err) {
            console.log(err);
            res.send("problem occured in user creation" + err.message);
        } else {
            res.send('user created successfully');
        }

    });
});
module.exports = router;



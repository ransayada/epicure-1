const { compareSync, genSaltSync, hashSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user')
const login = async (username, password, res) => {
    try {
        const user = await User.find({ username })
        if (user.length === 0) {
            res.json({ error: true, msg: "Username or password are incorrect" }).status(403);
            return
        } else {
            if (compareSync(password, user[0].password)) {
                let access_token = jwt.sign({ id: user[0]._id }, "epicure", { expiresIn: "45m" });
                res.json({ access_token })
            } else {
                res.json({ error: true, msg: "Username or password are incorrect" }).status(403);
            }
        }
    } catch (error) {
        console.log(error)
    }
}


const register = (fname, lname, username, password, res) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt)
    new User({ password: hash, username, fname, lname }).save()
        .then(user => res.send(user))
        .catch(err => res.send(err).status(403));
}

module.exports = { register, login }
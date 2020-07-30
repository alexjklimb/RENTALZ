const bcrypt = require('bcryptjs');
module.exports = {
    createUser: async (req, res) => {
        const db = req.app.get('db')
        const {firstname,lastname,email,username, password} = req.body
        const matchingUser = await db.checkBuyer({username});
        if(matchingUser[0]) return res.status(400).send('Username already being used')
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.registerBuyer({firstname,lastname,email,username, hash});
        req.session.userid = newUser[0].id;
        delete newUser[0].password;
        return res.status(200).send(newUser[0]);
    },
    loginUser: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;

        const matchingUser = await db.checkBuyer({username});
        if (!matchingUser[0]) return res.status(400).send('Username not found');

        const authentication = bcrypt.compareSync(password, matchingUser[0].password);
        if (!authentication) {
            return res.status(401).send('Password is incorrect');
        }
        req.session.userid = matchingUser[0].id;
        delete matchingUser[0].password;
        return res.status(202).send(matchingUser[0]);
    },
    logoutUser: async (req, res) => {

        req.session.destroy();
        return res.sendStatus(200);
    },
    
}
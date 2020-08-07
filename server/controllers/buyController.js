const bcrypt = require('bcryptjs');
module.exports = {
    createUser: async (req, res) => {
        const db = req.app.get('db')
        const {firstname,lastname,email,username, password} = req.body
        const matchingUser = await db.checkBuyer({username});
        const matchingOther = await db.checkSeller({username})
        if(matchingUser[0]||matchingOther[0]) return res.status(400).send('Username already being used')
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
        const matchingOther = await db.checkSeller({username});
        const matchingUser = await db.checkBuyer({username});
        if (!matchingUser[0]&&!matchingOther[0]) return res.status(400).send('Username not found');
        const authentication = matchingUser[0]? bcrypt.compareSync(password, matchingUser[0].password) : bcrypt.compareSync(password, matchingOther[0].password) ;
        if (!authentication) {
            return res.status(401).send('Password is incorrect');
        }
        const user = matchingUser[0]? matchingUser:matchingOther;
        req.session.userid = user[0].id;
        delete user[0].password;
        return res.status(202).send([matchingUser[0],matchingOther[0]]);
    },
    logoutUser: async (req, res) => {

        req.session.destroy();
        return res.sendStatus(200);
    },
    
}
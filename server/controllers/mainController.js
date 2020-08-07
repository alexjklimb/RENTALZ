const bcrypt = require('bcryptjs');
module.exports = {
    createPost: (req, res) => {
        const {userid} = req.session;
        const {type, imgUrl, make, model, year, description, price} = req.body;
        const db = req.app.get('db');

        db.create_post({userid, type, imgUrl, make, model, year, description, price})
        .then(response => res.sendStatus(200));
    },
    getPost: async (req, res) => {
        const {userid} = req.session
        const db = req.app.get('db');
        const post = await db.get_user_posts({userid});
        console.log(userid)
        console.log(post)
        return res.status(200).send(post);
    },
    getAllPosts: async (req, res) => {
        const db = req.app.get('db');
        const posts = await db.get_all_posts();
        return res.status(200).send(posts);
    },
    deletePost: async (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');
        const updatedList = await db.delete({id});
        res.status(200).send(updatedList);
    }
    
}
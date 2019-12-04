const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {

    //Retorna todos os usuários
    async getUsers(req, res){
        const user = await User.find();

        return res.json(user);
    },

    //Retorna 1 usuario
    async login(req, res){
        let registration = req.body.registration
        let password = req.body.password

        try{
            const user = await User.findOne({registration, password});

            return res.status(200).json(user);
        } catch(err) {
            return res.status(204).send({ error: 'Usuario incorreto' });
        }
    },

    //Cadastra usuario
    async register(req, res){
        const user = await User.create(req.body);

        return res.json(user);
    }
};
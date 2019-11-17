const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {

    //Retorna todos os usuários
    async index(req, res){
        const user = await User.find();

        return res.json(user);
    },

    //Retorna 1 usuario
    async login(req, res){
        try{
            const user = await User.findById(req.params.id);

            return res.json(user);
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
const mongoose = require('mongoose');

const Location = mongoose.model('Location');

module.exports = {

    //Retorna todos os usuários
    async getAll(req, res){
        const location = await Location.find();

        return res.json(location);
    },

    //Retorna 1 usuario
    async getOne(req, res){
        let name = req.body.name

        try{
            const location = await Location.findOne({name});

            return res.json(location);
        } catch(err) {
            return res.status(204).send({ error: 'não encontrado' });
        }
    },

    //Cadastra usuario
    async register(req, res){
        const location = await Location.create(req.body);

        return res.json(location);
    }
};
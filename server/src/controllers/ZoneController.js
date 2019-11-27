const mongoose = require('mongoose');

const Zone = mongoose.model('Zone');

module.exports = {

    //Retorna todos os usuários
    async getAll(req, res){
        const zone = await Zone.find();

        return res.json(zone);
    },

    //Retorna 1 usuario
    async getOne(req, res){
        let name = req.params.name

        try{
            const zone = await Zone.findOne({name});

            return res.json({name: zone});
        } catch(err) {
            return res.status(204).send({ error: 'não encontrado' });
        }

        // Por ID 

        // try{
        //     const zone = await Zone.findById(req.params.id);

        //     return res.json(zone);
        // } catch(err) {
        //     return res.status(204).send({ error: 'não encontrado' });
        // }
    },

    //Cadastra usuario
    async register(req, res){
        const zone = await Zone.create(req.body);

        return res.json(zone);
    }
};
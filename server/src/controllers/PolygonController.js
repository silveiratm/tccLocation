const mongoose = require('mongoose');

const Polygon = mongoose.model('Polygon');

module.exports = {

    //Retorna todos os usuários
    async getAll(req, res){
        const polygon = await Polygon.find();

        return res.json(polygon);
    },

    //Retorna 1 usuario
    async getOne(req, res){
        let name = req.body.name

        try{
            const polygon = await Polygon.findOne({name});

            return res.json(polygon);
        } catch(err) {
            return res.status(204).send({ error: 'não encontrado' });
        }
    },

    //Cadastra usuario
    async register(req, res){
        const polygon = await Polygon.create(req.body);

        return res.json(polygon);
    }
};
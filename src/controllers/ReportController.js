const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    // Encontrar todos usuários
    // Desses usuários eu quero buscar os filmes assistidos

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: ''
        }
      },
      include: [
        { 
          association: 'films', 
          required: false,
          where: {
            name: {
              [Op.iLike]: '%Filmes'
            }
          }
        },
      ]
    })

    return res.json(users);
  }
};
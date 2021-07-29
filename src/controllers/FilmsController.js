const User = require('../models/User');
const Films = require('../models/Films');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { 
        association: 'films', 
        attributes: ['name'], 
        through: { 
          attributes: []
        } 
      }
    })

    return res.json(user.films);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const [ films ] = await Films.findOrCreate({
      where: { name }
    });

    await user.addFilm(films);

    return res.json(films);
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const tech = await Tech.findOne({
      where: { name }
    });

    await user.removeTech(tech);

    return res.json();
  }
};
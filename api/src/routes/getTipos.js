const {Tipo} = require("../db.js")

const getTipos = async(req, res) => {
    try {
      const tipos = await Tipo.findAll();
      res.status(200).json(tipos)

    } catch (error) {
        return res.status(400).json({ message: error.message }) 
    }
}
module.exports = getTipos;
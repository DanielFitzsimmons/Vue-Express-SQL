//Imports
const {InstructionGuide} = require('../models') //Sequelize Model for User

module.exports = {
  //Routes
  //Gets All Instruction Guides from the database
  async getAllInstructionGuides (req, res) {
    try {
      const instructionGuide = await InstructionGuide.findAll({
        limit:10
      })
      res.send(instructionGuide);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to get all Instruction Guides'
      })
    }
  },
  async postInstructionGuides (req, res) {
    try {
      const instructionGuide = await InstructionGuide.create(req.body)
      res.send(instructionGuide);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to post a new Instruction Guide'
      })
    }
  }
}
//Imports
const {InstructionGuide} = require('../models') //Sequelize Model for User
const {Op} = require('../models')

module.exports = {
  //Routes
  //Gets All Instruction Guides from the database
  async getInstructionGuides (req, res) {
    try {
      let instructionGuides = null // Stores the returned result from the database
      const search = req.query.search // Holds the search query from the url
      
      // If there is a search query
      if(search){
        // Find where title, category, author or equipment are like the search query
        // Please refer to the sequelizejs documentation for further details and examples http://docs.sequelizejs.com/manual/querying.html
        instructionGuides = await InstructionGuide.findAll({
          where: {[Op.or]: [{ 'title': {[Op.like]: `%${search}%` } }, { 'category': {[Op.like]: `%${search}%` } }, { 'author': {[Op.like]: `%${search}%` } }, { 'equipment': {[Op.like]: `%${search}%` } }]}
        })
      }
      // Else there is no search query
      else {
        // Load the first 10 results
        instructionGuides = await InstructionGuide.findAll({
          limit:10
        })
      }
      res.send(instructionGuides);
    } catch (err) {
      console.log(err);
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
  },
  async getInstructionGuideById (req, res) {
    try {
      const instructionGuides = await InstructionGuide.findOne({
        where: {id: req.params.instructionGuidesId}
      })
      res.send(instructionGuides) 
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to get the instruction guide by id'
      })
    }
  },
  async putInstructionGuideById (req, res) {
    try {
      const instructionGuides = await InstructionGuide.update(req.body, {
        where: {id: req.params.instructionGuidesId}
      })
      res.send(instructionGuides) 
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to get the instruction guide by id'
      })
    }
  }
}
const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const InstructionGuidesController = require('./controllers/InstructionGuidesController');

module.exports = (app) => {

    app.get('/status', (req, res) =>{
        res.send({message: 'hello world'})
    })
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
    app.post('/login', AuthenticationController.login)
    app.get('/instructionguides', InstructionGuidesController.getAllInstructionGuides)
    app.post('/instructionguides', InstructionGuidesController.postInstructionGuides)
    app.get('/instructionguides/:instructionGuidesId', InstructionGuidesController.getInstructionGuideById)
    
    app.put('/instructionguides/:instructionGuidesId', 
    InstructionGuidesController.putInstructionGuideById)
}

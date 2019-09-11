const {User} = require('../models')

module.exports = {

    async register (req, res) {
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }catch(err) {
            res.status(400).send({
                error: 'This email account is already in use'
            })
        }
    },
    async login (req, res) {
        try{
           const {email, password} = req.body
           const user = await User.findOne({
               where: {
                   email: email
               }
           })
           if(!user){
                res.status(401).send({
                    error: 'The login information was incorrect!'
                })
           }
           const isPasswordValid = password === user.password
           if (!isPasswordValid) {
                res.status(401).send({
                    error: 'The login information was incorrect!'
                })
           }
           
           res.send(user)

        }catch(err) {
            res.status(500).send({
                error: 'An error occoured while trying to login'
            })
        }
    },


}
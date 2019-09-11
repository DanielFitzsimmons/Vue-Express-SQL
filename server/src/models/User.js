const bcrypt = require('bcrypt')

async function hashPassword(user){
    if (!user.changed('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10)
    const hashPaswordValue = await bcrypt.hash(user.password, salt)
    user.setDataValue('password', hashPaswordValue)
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', 
    {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }
    },
    {
        hooks: {
                    beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = async function(password){
        try {
            const validPassword = await bcrypt.compare(password, this.password)
            return validPassword
        } catch (error) {
            console.log("Wrong Password" + error)
        }
    }
    return User
}
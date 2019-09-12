module.exports = (sequelize, DataTypes) => {
    const InstructionGuide = sequelize.define('InstructionGuide',

        {
            title: {type: DataTypes.STRING},
            author: {type: DataTypes.STRING},
            category: {type: DataTypes.STRING},
            image: {type: DataTypes.STRING},
            youtubeId: {type: DataTypes.STRING},
            equipment: {type: DataTypes.TEXT},
            instructions: {type: DataTypes.TEXT}
        }

    )
    return InstructionGuide
}
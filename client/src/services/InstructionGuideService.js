import Api from '@/services/Api'

export default {
    getAllInstructionGuides(){
        return Api().get('instructionGuides')
    },
    postInstructionGuides(instructionGuides){
        return Api().post('instructionGuides', instructionGuides)
    },
    getInstructionGuideById(instructionGuidesId){
        return Api().get(`instructionGuides/${instructionGuidesId}`)
    },
    putInstructionGuideById(instructionGuidesId, instructionGuides){
        return Api().put(`instructionGuides/${instructionGuidesId}`, instructionGuides)
        // eslint-disable-next-line
        //console.log("Test send to server");
    }
}
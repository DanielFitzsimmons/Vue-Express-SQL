import Api from '@/services/Api'

export default {
    getInstructionGuides(search){
        return Api().get('instructionGuides', {
            params: {
                search:search
            }
        })
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
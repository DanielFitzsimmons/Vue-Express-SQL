import Api from '@/services/Api'

export default {
    getAllInstructionGuides(){
        return Api().get('instructionGuides')
    },
    postInstructionGuides(instructionGuides){
        return Api().post('instructionGuides', instructionGuides)
    }
}
import Api from '@/services/Api'

export default {
    getAllInstructionGuides(){
        return Api().get('instructionGuides')
    }
}
<template>
  <div>
    <panel title="Instruction Guide">
    </panel>
  </div>
</template>

<script>

import Panel from "@/components/Panel";
import InstructionGuideService from "@/services/InstructionGuideService";
export default {
    name:"ViewInstructionGuide",
    components: {
        Panel
    },
    data (){
        return {
            instructionGuide: null
        }
    },
    async mounted(){
        const instructionGuideId = this.$store.state.route.params.instructionGuideId
        this.instructionGuide = 
        await InstructionGuideService.getInstructionGuideById(instructionGuideId)
    }
}

</script>

<style scoped>

</style>

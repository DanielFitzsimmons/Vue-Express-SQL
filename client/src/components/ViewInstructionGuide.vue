<template>
  <div>
    <panel title="Instruction Guide">
        <div class="row">
          <div class="col-md-4">
            <img :src="instructionGuide.image" :alt="instructionGuide.title" class="img-fluid rounded shadow">
            <h3 class="mt-2">{{instructionGuide.title}}</h3>
            <b>Author: </b>{{instructionGuide.author}}<br>
            <b>Category: </b>{{instructionGuide.category}}<br>
            <b>Equipment: </b>{{instructionGuide.equipment}}
          </div>
          <div class="col-md-8">
            <div class="iframe-container">
              <iframe class="w-100 rounded" :src='`https://www.youtube.com/embed/${instructionGuide.youtubeId}`' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="mt-2"><b>Instructions: </b> {{instructionGuide.instructions}} </p>
            <router-link :to="'/browse/'+ instructionGuide.id +'/edit'" class="mr-2 w-100 btn btn-success">Edit</router-link>
          </div>
        </div>
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
        (await InstructionGuideService.getInstructionGuideById(instructionGuideId)).data
    }
}
</script>

<style scoped>
</style>
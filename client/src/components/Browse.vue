<template>
  <div>
      <panel title="Browse">
        <router-link to="/browse/create" class="btn btn-success mr-2 w-100 mb-3">Create Instruction Guide</router-link>
        <div class="row" >
        <div class="col-12 col-md-6 col-lg-4" v-for="instructionGuide in instructionGuides" :key="instructionGuide.id">
            <b-card
              :title="instructionGuide.title"
              :img-src="instructionGuide.image"
              :img-alt="instructionGuide.title"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <small>
                <p class="text-muted p-0 m-0"><b>Auhtor:</b> {{instructionGuide.author}}</p>
                <p class="text-muted p-0 m-0"><b>Category:</b> {{instructionGuide.category}}</p>
                <p class="text-muted p-0 m-0"><b>Equipment:</b> {{instructionGuide.equipment}}</p>
                </small>
              </b-card-text>

              <router-link :to="'/browse/' + instructionGuide.id" class="mr-2 w-100 btn btn-primary">View Instructions</router-link>
            </b-card>
        </div>
        </div>
      </panel>
  </div>
</template>

<script>
import InstructionGuideService from '@/services/InstructionGuideService'
import Panel from '@/components/Panel'
export default {
  name: 'Browse',
  methods: {
  },
  components: {
    Panel
  },
  data () {
    return {
      instructionGuides: null
    }
  },
  async mounted () {
    this.instructionGuides = (await InstructionGuideService.getAllInstructionGuides()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

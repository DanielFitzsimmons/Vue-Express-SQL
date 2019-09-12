<template>
  <div>
      <panel title="Browse">
          <div v-for="instructionGuide in instructionGuides" :key="instructionGuide.id">

                {{instructionGuide.title}}
                {{instructionGuide.author}}
                {{instructionGuide.category}}

          </div>
      </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import InstructionGuideService from '@/services/InstructionGuideService'
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
  async mounted(){
      this.instructionGuides = (await InstructionGuideService.getAllInstructionGuides()).data
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
      <panel title="Create Instruction Guide">
          <b-form>
            <div class="row">
              <!--Left Col-->
              <!--
                title: {type: DataTypes.STRING},
                author: {type:DataTypes.STRING},
                category: {type:DataTypes.STRING},
                image: {type:DataTypes.STRING},
                youtubeId: {type:DataTypes.STRING},
                equipment: {type:DataTypes.TEXT},
                instructions: {type:DataTypes.TEXT}
              -->
              <div class="col-12 col-md-4">
                <b-form-group id="title-group" label="Title:" label-for="title" description="Please enter a appropriate title for your instruction guide">
                  <!--v-model - Binds the data to the validator -->
                  <!--:state - Stores the logic that checks if the field data is valid -->
                  <!--aria-describedby="title-feedback" - Refers to the feedback that should display if the datat is invalid-->
                  <b-form-input id="title" type="text" required placeholder="Enter Title" v-model="$v.instructionGuide.title.$model" :state="$v.instructionGuide.title.$dirty ? !$v.instructionGuide.title.$error : null" aria-describedby="title-feedback"></b-form-input>
                  <b-form-invalid-feedback id="title-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="author-group" label="Author:" label-for="author" description="Please enter your name">
                  <b-form-input id="author" type="text" required placeholder="Enter Author" v-model="$v.instructionGuide.author.$model" :state="$v.instructionGuide.author.$dirty ? !$v.instructionGuide.author.$error : null" aria-describedby="author-feedback"></b-form-input>
                  <b-form-invalid-feedback id="author-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="category-group" label="Category:" label-for="category" description="Please enter a appropriate category">
                  <b-form-input id="category" type="text" required placeholder="Enter Category" v-model="$v.instructionGuide.category.$model" :state="$v.instructionGuide.category.$dirty ? !$v.instructionGuide.category.$error : null" aria-describedby="category-feedback"></b-form-input>
                  <b-form-invalid-feedback id="category-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="image-group" label="Image:" label-for="image" description="Please enter a valid image URL">
                  <b-form-input id="image" type="text" required placeholder="Enter Image URL" v-model="$v.instructionGuide.image.$model" :state="$v.instructionGuide.image.$dirty ? !$v.instructionGuide.image.$error : null" aria-describedby="image-feedback"></b-form-input>
                  <b-form-invalid-feedback id="image-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="youtubeId-group" label="YouTube ID:" label-for="youtubeId" description="Please enter a valid YouTube ID">
                  <b-form-input id="youtubeId" type="text" required placeholder="Enter YouTube ID" v-model="$v.instructionGuide.youtubeId.$model" :state="$v.instructionGuide.youtubeId.$dirty ? !$v.instructionGuide.youtubeId.$error : null" aria-describedby="youtubeId-feedback"></b-form-input>
                  <b-form-invalid-feedback id="youtubeId-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
              </div>
              <!--Right Col-->
              <div class="col-12 col-md-8">
                  <b-form-group id="equipment-group" label="Equipment Required:" label-for="equipment" description="Please enter all required equipment">
                    <b-form-textarea id="equipment" placeholder="List equipment..." rows="3" max-rows="6" v-model="$v.instructionGuide.equipment.$model" :state="$v.instructionGuide.equipment.$dirty ? !$v.instructionGuide.equipment.$error : null" aria-describedby="equipment-feedback"></b-form-textarea>
                    <b-form-invalid-feedback id="equipment-feedback">
                      This is a required field and must be at least 3 characters.
                    </b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group id="instructions-group" label="Instructions Required:" label-for="instructions" description="Please enter all required instructions">
                    <b-form-textarea id="instructions" placeholder="Please enter your instructions" rows="12" max-rows="50" v-model="$v.instructionGuide.instructions.$model" :state="$v.instructionGuide.instructions.$dirty ? !$v.instructionGuide.instructions.$error : null" aria-describedby="instructions-feedback"></b-form-textarea>
                    <b-form-invalid-feedback id="instructions-feedback">
                      This is a required field and must be at least 3 characters.
                    </b-form-invalid-feedback>
                  </b-form-group>
              </div>
              <div class="col-12">
                <b-button @click="create" class="w-100" variant="primary">Submit</b-button>
              </div>
            </div>
          </b-form>
      </panel>
  </div>
</template>

<script>
// Get and Post Services
import InstructionGuideService from '@/services/InstructionGuideService'
// Panel Component
import Panel from '@/components/Panel'
// Validation module
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'CreateInstructionGuide',
  components: {
    Panel
  },
  data () {
    return {
      instructionGuide: {
        title: null,
        author: null,
        category: null,
        image: null,
        youtubeId: null,
        equipment: null,
        instructions: null
      }
    }
  },
  // Validation Schema
  mixins: [validationMixin],
  validations: {
    instructionGuide: {
      title: {
        required,
        minLength: minLength(3)
      },
      author: {
        required,
        minLength: minLength(3)
      },
      category: {
        required,
        minLength: minLength(3)
      },
      image: {
        required,
        minLength: minLength(3)
      },
      youtubeId: {
        required,
        minLength: minLength(3)
      },
      equipment: {
        required,
        minLength: minLength(3)
      },
      instructions: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    async create () {
      // Validiaton Check
      this.$v.instructionGuide.$touch()
      if (this.$v.instructionGuide.$anyError) {
        return
      }

      // Posts data
      try {
        await InstructionGuideService.postInstructionGuides(this.instructionGuide)
        this.$router.push({
          name: 'browse'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

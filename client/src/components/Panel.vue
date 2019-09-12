<template>
  <div >
    <b-card class="text-left shadow-lg bg-light border-0 rounded-0">
        <h4 slot="header" class="text-primary m-0 border-0 rounded-0">{{title}}</h4>
        <slot>
            <!-- Content will be added here -->
        </slot>
      </b-card>
    </div>
</template>

<script>
export default {
  name: 'Panel',
  props: ['title']
}
</script>
<style lang="stylus">

</style>


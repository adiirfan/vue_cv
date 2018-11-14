<template>
  <div id="app">
      <div v-if="$mq === 'mobile' || $mq === 'tablet'">
          <mobile/>
      </div>
      <div v-else>
          <homes/>
      </div>
  </div>
</template>
<script>
    import '@/assets/style/base.css'
    import homes from '@/views/Home'
    import mobile from "./views/Mobile";
    export default {
        components:{
            mobile,
            homes
        }
    }
</script>
<style lang="scss">

</style>

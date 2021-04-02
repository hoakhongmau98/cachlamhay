<template>
  <div>
    <Mainsite />
    <p>{{ $store.state.bith.day }}</p>
  </div>
</template>

<script>
import MainSite from '@/components/testsite.vue'
export default {
  components: {
    MainSite
  }
}
</script>

<style>

</style>

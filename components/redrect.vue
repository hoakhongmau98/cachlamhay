<template>
  <div>
    <div class="container mx-auto my-10">
      <div class="flex space-x-4 ..." style="height: 250px">
        <NuxtLink class="flex-1" to="#">
          <img
            :src="`/img/${images_label.first.img}.jpg`"
            style="height: 250px;width: 100%"
          >
        </NuxtLink>
        <NuxtLink class="flex-1" to="#">
          <img
            :src="`/img/${images_label.second.img}.jpg`"
            style="height: 250px;width: 100%"
          >
        </NuxtLink>
        <NuxtLink class="flex-1" to="#">
          <img
            :src="`/img/${images_label.thirst.img}.jpg`"
            style="height: 250px;width: 100%"
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

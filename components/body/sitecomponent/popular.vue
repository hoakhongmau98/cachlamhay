<template>
  <div class="... mb-4 bg-gray-100">
    <div v-for="img_label in images_label" :key="img_label.label" class="my-8" style="heigh: 250px">
      <div v-if="img_label.id <= 5" class="grid grid-cols-3 gap-4">
        <div class="... object-contain">
          <!-- <div class="... object-contain" :style="{ backgroundImage: `url(_nuxt/assets/img/${img_label.img}.jpg)`}"> -->
          <img :src="`/img/${img_label.img}.jpg`">
        </div>
        <div class="col-span-2 ... ">
          <h4>{{ img_label.title }}</h4>
          <p>{{ img_label.time }}</p>
        </div>
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

<template>
  <div class="col-span-2 ... ">
    <h1 style="font-size: 25px">
      <b><u>Mới nhất</u></b>
    </h1>
    <br>
    <NuxtLink v-for="img_label in images_label" :key="img_label.label" class="mb-4" style="height: 150px, display: blockl; font-size: 1vw" to="#">
      <div class="grid grid-cols-3 gap-4">
        <div class="... object-contain">
          <!-- <div class="... object-contain" :style="{ backgroundImage: `url(_nuxt/assets/img/${img_label.img}.jpg)`}"> -->
          <img :src="`/img/${img_label.img}.jpg`" style="max-height: 150px; width: 100%">
        </div>
        <div class="col-span-2 ... ">
          <h3 class="mb-4" style="font-size: 20px">
            <NuxtLink to="#">
              <b>{{ img_label.title }}</b>
            </NuxtLink>
          </h3>
          <p class="mb-4">
            {{ img_label.type }} - {{ img_label.library }} - {{ img_label.time }}
          </p>
          <p class="mb-4">
            {{ img_label.infor }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

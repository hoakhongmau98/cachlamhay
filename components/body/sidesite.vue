/* eslint-disable vue/no-unused-components */
<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <MainStie />
      <div class=" ... mb-4">
        <h1 style="font-size: 25px">
          <b><u>Theo dõi chúng tôi</u></b>
        </h1>
        <br>
        <!-- social -->
        <h1 style="font-size: 25px">
          <b><u>Pho bien</u></b>
        </h1>
        <!-- popual -->
        <h1 style="font-size: 25px">
          <b><u>Theo dõi chúng tôi</u></b>
        </h1>
        <NuxtLink v-for="sidetag in sidetags" :key="sidetag.label" to="">
          <!-- content_extensions -->
          <!-- push push sitetag to nuxtlink -->
          <!-- <content-extensions /> -->
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
// import content_extensions from '@/sitecomponent/content_extensions.vue'
// import Mainsite from '../mainsite.vue'
// import Content_extensions from './sitecomponent/content_extensions.vue'
// export default {
//   components: {
//     content_extensions,
//     Mainsite,
//     Content_extensions
//   }
// }
</script>

<style>

</style>

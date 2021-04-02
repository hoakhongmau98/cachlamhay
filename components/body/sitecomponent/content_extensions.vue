<template>
  <div class="... mb-4 bg-red-300" :style="{ backgroundImage: `url(/img/${ArgExtensions.img}.jpg)`}">
    <div style="height: 270px;width: 100%; display: block;" class="container">
      <p style="position: relative; top: 50%; pading: auto; text-size: 15px">
        {{ ArgExtensions.infor }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentExtensions',
  props: {
    ArgExtensions: Object
  }
}
</script>

<style>

</style>

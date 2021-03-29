<template>
  <div>
    <div class="border-2 border-gray-300">
      <div class="flex space-x-3 container mx-auto">
        <div class="float-left ...">
          Đồ chơi
        </div>
        <div class="float-left px-8...">
          Hoa Giấy
        </div>
        <div class="float-left px-8...">
          Tái chế
        </div>
        <div class="float-left px-8...">
          Trang Trí
        </div>
      </div>
    </div>
    <div class="container mx-auto my-8" style="max-width: 500px">
      <div class="object-contain">
        <img
          :src="require('../assets/img/logo-cachlamhay-final-tiny.png')"
          alt="font_image"
        >
      </div>
    </div>
    <div class="border-2 border-gray-300">
      <div class="flex space-x-3 container mx-auto">
        <div class="float-left ...">
          Đồ chơi
        </div>
        <div class="float-left px-8...">
          Hoa Giấy
        </div>
        <div class="float-left px-8...">
          Tái chế
        </div>
        <div class="float-left px-8...">
          Trang Trí
        </div>
      </div>
    </div>
    <div class="container mx-auto my-10">
      <div class="flex space-x-4 ...">
        <div class="flex-1 bg-red-300" style="height: 300px">
          1
        </div>
        <div class="flex-1 bg-pink-300" style="height: 300px">
          2
        </div>
        <div class="flex-1 bg-red-300" style="height: 300px">
          3
        </div>
      </div>
    </div>
    <div class="container mx-auto my-10">
      <label><u>News</u></label>
      <br>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="img in images" class="col-span-2 ... " style="height: 500px">
          <div class="bg-red-300 mt-4" style="height: 500px">
            {{img}}
          </div>
        </div>
        <div class="... mt-4">
          <div class="... mb-4 bg-red-300" style="height: 300px">
            5
          </div>
          <div class="... mb-4 bg-red-300" style="height: 600px">
            5
          </div>
          <div class="... mb-4 bg-red-300" style="height: 500px">
            5
          </div>
          <div class="... mb-4 bg-red-300" style="height: 500px">
            5
          </div>
          <div class="... mb-4 bg-red-300" style="height: 500px">
            5static
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        '~/img/may-bay-truc-thang-bang-nhua-696x392.jpg',
        '~/img/thiep-giay-xoan-696x556.png',
        '~/img/thiep-handmade-696x392.jpg',
        '~/img/8.3-696x464.jpg'
      ]
    }
  }
}
</script>
<!--
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
-->

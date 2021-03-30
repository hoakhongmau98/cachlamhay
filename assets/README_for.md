// for loop extract infor and show tag in html

export default {
  data () {
    return {
      images_label: {
        first: {
          img: 'dreamcatcher',
          label: 'First label'
        },
        second: {
          img: '8.3',
          label: 'First label'
        },
        thirst: {
          img: 'khay-dung-but',
          label: 'First label'
        },
        four: {
          img: 'lo-hoa-bang-giay-bao-cu',
          label: 'First label'
        }
      }

<div v-for="img_label in images_label" :key="img_label.label" class="col-span-2 ... " style="height: 500px">
          <div class="bg-red-300 mt-4" style="height: 500px">
            <!-- <img :src=require({{img}}) alt="font_image"> -->
            <!-- <img :src="require(`~/assets/img/${img_label.img}.jpg`)" alt='img_label.label'> -->
            <img :src="require(`~/assets/img/${img_label.img}.jpg`)" />
          </div>
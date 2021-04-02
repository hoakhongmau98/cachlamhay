<template>
  <div>
    <div class="border-2 border-gray-300">
      <div class="flex space-x-3 container mx-auto">
        <div class="float-left ...">
          <!-- Đồ chơi -->
          <NuxtLink to="#">
            Đồ chơi
          </NuxtLink>
        </div>
        <div class="float-left px-8...">
          <NuxtLink to="#">
            Hoa Giấy
          </NuxtLink>
        </div>
        <div class="float-left px-8...">
          <NuxtLink to="#">
            Tái chế
          </NuxtLink>
        </div>
        <div class="float-left px-8...">
          <NuxtLink to="#">
            Trang Trí
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="container mx-auto my-8" style="max-width: 500px">
      <!-- <NuxtLink class="object-contain" to="/">
        <img src="/img/logo-cachlamhay-final-tiny.png">
      </NuxtLink> -->
      <a href="/"><img src="/img/logo-cachlamhay-final-tiny.png"></a>
    </div>
    <div class="border-2 border-gray-300">
      <div class="flex space-x-3 container mx-auto">
        <div class="float-left ...">
          <NuxtLink to="#">
            Đồ chơi
          </NuxtLink>
        </div>
        <div class="float-left px-8...">
          <NuxtLink to="#">
            Hoa Giấy
          </NuxtLink>
        </div>
        <div class="float-left px-8...">
          <NuxtLink to="#">
            Tái chế
          </NuxtLink>
        </div>
        <div class="float-left px-8...">
          <NuxtLink to="#">
            Trang Trí
          </NuxtLink>
        </div>
      </div>
    </div>
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
    <div class="container mx-auto my-10">
      <div class="grid grid-cols-3 gap-4">
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
        <div class=" ... mb-4">
          <h1 style="font-size: 25px">
            <b><u>Theo dõi chúng tôi</u></b>
          </h1>
          <br>
          <div class="... mt-4">
            <div class="grid grid-cols-3 gap-4">
              <NuxtLink class="..." to="#">
                <button id="buttonSocialFacebook" style="height: 120px; width: 120px; font-size: 20px">
                  <i class="fab fa-facebook-f" /> <p>12,050</p><p style="font-size: 15px">
                    Thành viên
                  </p>
                </button>
              </NuxtLink>
              <NuxtLink class="..." to="#">
                <button id="buttonSocialYoutube" style="height: 120px; width: 120px; font-size: 20px">
                  <i class="fab fa-youtube" /><p>2362</p>
                  <p style="font-size: 15px">
                    Người theo dõi
                  </p>
                </button>
              </NuxtLink>
            </div>
          </div>
          <h1 style="font-size: 25px">
            <b><u>Theo dõi chúng tôi</u></b>
          </h1>
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
          <h1 style="font-size: 25px">
            <b><u>Theo dõi chúng tôi</u></b>
          </h1>
          <NuxtLink v-for="sidetag in sidetags" :key="sidetag.label" to="">
            <div class="... mb-4 bg-red-300" :style="{ backgroundImage: `url(/img/${sidetag.img}.jpg)`}">
              <!-- <img :src="require(`~/assets/img/${sidetag.img}.jpg`)" style="max-height: 270px;width: 100%; z-index: -1"> -->
              <div style="height: 270px;width: 100%; display: block;" class="container">
                <p style="position: relative; top: 50%; pading: auto; text-size: 15px">
                  {{ sidetag.infor }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images_label: {
        first: {
          id: 1,
          img: 'may-bay-truc-thang-bang-nhua',
          label: 'First label',
          title: 'Gợi ý cách làm một số món đồ chơi từ chai nhựa cho bé',
          type: 'ĐỒ CHƠI',
          library: 'CÁCH LÀM HAY ',
          time: '14/03/2021',
          infor: 'Nếu biết tận dụng và tái chế chai nhựa thì bạn sẽ không chỉ mang đến cho bé yêu nhà bạn những món đồ chơi độc lạ, thú vị. Mà...'
        },
        second: {
          id: 2,
          img: 'thiep-handmade',
          label: 'First label',
          title: 'Bật mí 5 món quà handmade 8/3 ngọt ngào, ý nghĩa',
          type: 'QUÀ TẶNG',
          library: 'CACHLÀM HAY',
          time: '12/03/2021',
          infor: 'Mùng 8 tháng 3, chắc chắn nhiều phái nam đang vô cùng băn khoăn và trăn trở. Khi không biết nên tặng quà gì cho đối phương. Nếu bạn cũng...'
        },
        thirst: {
          id: 3,
          img: 'thiep-giay-xoan',
          label: 'First label',
          title: 'Cách làm một số món quà handmade 8/3 đơn giản, ý nghĩa',
          type: 'QUÀ TẶNG',
          library: 'CÁCH LÀM HAY',
          time: '10/03/2021',
          infor: 'Bạn được trời phú cho một chút “hoa tay” và sở hữu sự khéo léo cùng tính kiên nhẫn, tỉ mỉ? Vào dịp 8/3 này, bạn muốn dành sự bất...'
        },
        four: {
          id: 4,
          img: '8.3',
          label: 'First label',
          title: '8/3 là ngày gì? Nguồn gốc và ý nghĩa của ngày 8/3',
          type: 'QUÀ TẶNG',
          library: 'CÁCH LÀM HAY ',
          time: '08/03/2021',
          infor: 'Vào ngày 8/3 hằng năm, hầu như ai cũng thấy phái nữ sẽ được tặng hoa, tặng quà và được nhận những lời chúc ý nghĩa ngọt ngào. Vậy 8/3...'
        },
        five: {
          id: 5,
          img: 'tohe-shop',
          label: 'First label',
          title: 'Mua quà 8/3 ở đâu? Top 4 địa chỉ nổi tiếng ở Hà Nội',
          type: 'QUÀ TẶNG',
          library: 'CÁCH LÀM HAY ',
          time: '08/03/2021',
          infor: '8/3 đã cận kề. Thế nhưng, các phái nam lại đang rất băn khoăn khi không biết mua quà 8/3 ở đâu? Để tặng cho những người phụ nữ mà...'
        },
        six: {
          id: 6,
          img: 'thiep-handmade',
          label: 'First label',
          title: 'Điểm danh những món quà handmade 8/3 ý nghĩa',
          type: 'QUÀ TẶNG',
          library: 'CÁCH LÀM HAY ',
          time: '04/03/2021',
          infor: 'Dường như ai cũng biết, 8/3 là ngày mà phái mạnh sẽ có cơ hội thể hiện tình cảm cũng như sự quý mến đối với những người phụ nữ...'
        },
        seven: {
          id: 7,
          img: 'Dua-Craft',
          label: 'First label',
          title: 'Top 4 shop mua nguyên liệu handmade tốt nhất ở Hà Nội',
          type: 'TÁI CHẾ',
          library: 'CÁCH LÀM HAY ',
          time: '18/02/2021',
          infor: 'Chắc hẳn, các bạn đã từng đau đầu. Vì không biết nên chọn mua quà gì cho bạn bè, người thân vào những dịp đặc biệt. Gợi ý, bạn có...'
        },
        eight: {
          id: 8,
          img: 'gau-bong',
          label: 'First label',
          title: 'Top 5 món quà tặng bạn gái cực kỳ ý nghĩa không nên bỏ qua',
          type: 'QUÀ TẶNG',
          library: 'CÁCH LÀM HAY ',
          time: '16/02/2021',
          infor: 'Một trong những cách để các bạn nam dễ dàng thể hiện được tình cảm chân thành của mình đến nửa kia, đó chính là tặng quà vào những ngày...'
        }
      },
      sidetags: {
        first: {
          id: 1,
          img: 'background1',
          label: 'First label',
          infor: 'Tự làm đồ chơi bảng chữ cái cho bé từ nắp chai nhựa'
        },
        second: {
          id: 2,
          img: 'background2',
          label: 'First label',
          infor: 'Top 5 món quà tặng bạn gái cực kỳ ý nghĩa không nên bỏ qua'
        },
        third: {
          id: 3,
          img: 'background3',
          label: 'First label',
          infor: 'Cách tự làm đồ chơi Domino cho bé'
        }
      }
    //   images: [
    //     '../assets/img/may-bay-truc-thang-bang-nhua-696x392.jpg',
    //     '../assets/img/thiep-giay-xoan-696x556.png',
    //     '../assets/img/thiep-handmade-696x392.jpg',
    //     '../assets/img/8.3-696x464.jpg'
    //   ]
    // }
    }
  }
}

</script>

<style>
#buttonSocialYoutube{
  color: white;
  background-color: #222222;
}
#buttonSocialFacebook{
  color: white;
  background-color: #222222;
}

#buttonSocialFacebook:hover{
  background-color: #4867AA;
}

.buttonSocialFacebook:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#buttonSocialYoutube:hover{
  background-color: #F40103
}

.buttonSocialYoutube:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
/*
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
} */
</style>

import Vuex from 'vuex'

// push out data $store.state.value or $store.mutaions ...
const createStore = () => {
  return new Vuex.Store({
    state: {
      // define data
      loadedPost: [],
      bith:
      {
        day: '16',
        month: '07',
        year: '1997'
      },
      image_logo: {
        img: '~/img/logo-cachlamhay-final-tiny.png'
      },
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
    },
    mutations: {
      // create a mutations will set value for state.loadedPost
      setPosts (state, posts) {
        state.loadedPost = posts
      }
    },
    //
    actions: {
      setPosts (vueContext, posts) {
        vueContext.commit('setPosts', posts)
      }
    },
    // create getters will change, edit value
    getters: {
      loadedPost (state) {
        return state.loadedPost
      }
    }

  })
}

export default createStore

export default {
  summary: {
    province: '10',
    donator: '1k',
    bloodUnit: '10k',
  },

  urgentList: {
    list: [
      {
        id: 1,
        name: 'Bệnh viện thành phố',
        bloodType: ['A+'],
      },
      {
        id: 2,
        name: 'Bệnh viện đa khoa',
        bloodType: ['B', 'O'],
      },
      {
        id: 3,
        name: 'Bệnh viện Cửa Đông',
        bloodType: ['AB', 'B'],
      },
    ],
  },

  event: {
    list: [
      {
        id: 1,
        title: "Ngày hội hiến máu tình nguyện 'Chủ nhật Đỏ'",
        time: '10/11/2021',
        status: 'Đang diễn ra',
        imgUrl: require('../../../assets/image/blur.png'),
      },
      {
        id: 2,
        title: "Ngày hội hiến máu tình nguyện 'Chủ nhật Đỏ'",
        time: '21/11/2021',
        status: 'Đang diễn ra',
        imgUrl: require('../../../assets/image/news_1.png'),
      },
      {
        id: 3,
        title: "Ngày hội hiến máu tình nguyện 'Chủ nhật Đỏ'",
        time: '02/12/2021',
        status: 'Đang diễn ra',
        imgUrl: require('../../../assets/image/news_1.png'),
      },
    ],
  },

  newsList: {
    list: [
      {
        id: 1,
        title: 'Phẫu thuật thành công cho bệnh nhân nhờ nguồn máu kịp thời',
        description:
          'Arcu nisi, convallis nec dictum. Sit est, risus at etiam et urna odio lorem.',
        time: '5 phút trước',
        imgUrl: require('../../../assets/image/news_1.png'),
      },
      {
        id: 2,
        title: 'Những lưu ý trước khi đi hiến máu',
        description:
          'Arcu nisi, convallis nec dictum. Sit est, risus at etiam et urna odio lorem.',
        time: '5 phút trước',
        imgUrl: require('../../../assets/image/news_2.png'),
      },
    ],
  },
};
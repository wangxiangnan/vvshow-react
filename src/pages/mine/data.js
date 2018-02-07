import { imgDirUrl } from '../../config';

const data = {
  defaultAvatarUrl: `${imgDirUrl}/defalt_avatar.png`,
  userInfo: null,
  bgPic: `${imgDirUrl}/mine_bg.jpg`,
  mineList: [{
    id: 0,
    name: '更多功能',
    bgColor: '#fe6a6a',
    url: './page/extrafns/extrafns',
    icon: `${imgDirUrl}/wwx_cy.png`,
  }, {
    id: 1,
    name: 'V秀场',
    bgColor: '#ffa648',
    url: './page/vspace/index',
    icon: `${imgDirUrl}/wwx_sy.png`
    }, {
      id: 2,
      name: '手写板',
      bgColor: '#6cacf4',
      url: './page/handwrite/index',
      icon: `${imgDirUrl}/wwx_zp.png`
    }, {
      id: 3,
      name: '联系微V秀',
      bgColor: '#b4e087',
      url: './page/aboutus/aboutus',
      icon: `${imgDirUrl}/wwx_fx.png`
  }]
}

export default data;
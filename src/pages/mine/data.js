import path from 'path';
import config from '../../config';

const data = {
  defaultAvatarUrl: `${config.imgDirUrl}/defalt_avatar.png`,
  userInfo: null,
  bgPic: path.join(config.imgDirUrl,"/mine_bg.jpg"),
  mineList: [{
    id: 0,
    name: '更多功能',
    bgColor: '#fe6a6a',
    url: './page/extrafns/extrafns',
    icon: path.join(config.imgDirUrl,"/wwx_cy.png"),
  }, {
    id: 1,
    name: 'V秀场',
    bgColor: '#ffa648',
    url: './page/vspace/index',
    icon: path.join(config.imgDirUrl,"/wwx_sy.png")
    }, {
      id: 2,
      name: '手写板',
      bgColor: '#6cacf4',
      url: './page/handwrite/index',
      icon: path.join(config.imgDirUrl,"/wwx_zp.png")
    }, {
      id: 3,
      name: '联系微V秀',
      bgColor: '#b4e087',
      url: './page/aboutus/aboutus',
      icon: path.join(config.imgDirUrl,"/wwx_fx.png")
  }]
}

export default data;
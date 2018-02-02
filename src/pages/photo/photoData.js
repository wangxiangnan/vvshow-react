import path from 'path';
import config from '../../config';
const photoList = [{
  url: '/photo/speciallist',
  avatarUrl: path.join(config.imgDirUrl,"/avatar.jpg"),
  text: '创意工厂',
  imgPath: path.join(config.imgDirUrl,"/banner_factory.jpg"),
  sawNum: 0,
  time: '2017-09-26',
  id: 0,
  sawIconUrl: path.join(config.imgDirUrl,"/eye.png")
},{
    url: '/photo/makeword',
    avatarUrl: path.join(config.imgDirUrl,"/avatar.jpg"),
    text: '文字转图',
    imgPath: path.join(config.imgDirUrl,"/wenzi.jpg"),
    sawNum: 0,
    time: '2017-09-15',
    id: 1,
    sawIconUrl: path.join(config.imgDirUrl,"/eye.png")
  },{
    url: '/photo/makeletter',
    avatarUrl: path.join(config.imgDirUrl,"/avatar.jpg"),
    text: '见字如面',
    imgPath: path.join(config.imgDirUrl,"/jzrm_1.jpg"),
    sawNum: 0,
    time: '2017-06-27',
    id: 2,
    sawIconUrl: path.join(config.imgDirUrl,"/eye.png")
  }, {
    url: '/photo/makebarrage',
    avatarUrl: path.join(config.imgDirUrl,"/avatar.jpg"),
    text: '疯狂弹幕',
    imgPath: path.join(config.imgDirUrl,"/tanmu_1.jpg"),
    sawNum: 0,
    time: '2017-04-20',
    id: 3,
    sawIconUrl: path.join(config.imgDirUrl,"/eye.png")
  }/*, {
  url: '/photo/make/make',
  avatarUrl: '/img/upload/defalt_avatar.png',
  text: '拼接图片',
  imgPath: `${imgDirUrl}pjtp.jpg`,
  pid: 3
  }, {
    url: 'make/make',
    avatarUrl: '',
    text: '创意涂鸦',
    imgPath: `${imgDirUrl}cyty.jpg`,
    pid: 4
  }*/]

export default photoList;
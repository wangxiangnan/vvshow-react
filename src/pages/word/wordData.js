import path from 'path';
import config from '../../config';

const data ={
  wordBgUrl: `${config.imgDirUrl}/word_bg.jpg`,

  wordList: [{
    url: 'make/make',
    text: '以一当百',
    imgPath: path.join(config.imgDirUrl,"/yydb.jpg"),
    id: 0
  }, {
      url: 'make/make',
      text: '扑朔迷离',
      imgPath: path.join(config.imgDirUrl,"/psml.jpg"),
      id: 1
  }]
};

export default data;
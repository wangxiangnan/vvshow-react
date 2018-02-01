import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import config from './config';
import path from 'path';
import {reducer as tabBarsReducer} from './components/footer';

import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];


const reducer = combineReducers({
  //consoleHead: consoleHeadReducer,
  tabList: consoleMenuReducer
});


const storeEnhancers = compose(
  applyMiddleware(...middlewares)
);

const data = {
  tabBars: [
    {
      "pagePath": "/photo",
      "text": "图片",
      "iconPath": path.join(config.imgDirUrl,"/photo.png"),
      "selectedIconPath": path.join(config.imgDirUrl,"/selected_photo.png")
    },
    {
      "pagePath": "/word",
      "text": "文字",
      "iconPath": path.join(config.imgDirUrl,"/pen.png"),
      "selectedIconPath": path.join(config.imgDirUrl,"/selected_pen.png")
    },
    {
      "pagePath": "/mine",
      "text": "我的",
      "iconPath": path.join(config.imgDirUrl,"/mine.png"),
      "selectedIconPath": path.join(config.imgDirUrl,"/selected_mine.png")
    }
  ]
};

export default createStore(reducer, data, storeEnhancers);
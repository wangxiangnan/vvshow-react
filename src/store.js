import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {imgDirUrl} from './config';
import {reducer as tabBarsReducer} from './components/footer';

import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];


const reducer = combineReducers({
  tabBars: tabBarsReducer
});


const storeEnhancers = compose(
  applyMiddleware(...middlewares)
);

const data = {
  tabBars: [
    {
      "id": 0,
      "pagePath": "/photo",
      "text": "图片",
      "iconPath":`${imgDirUrl}/photo.png`,
      "selectedIconPath": `${imgDirUrl}/selected_photo.png`,
      "active": true
    },
    {
      "id": 1,
      "pagePath": "/word",
      "text": "文字",
      "iconPath": `${imgDirUrl}/pen.png`,
      "selectedIconPath": `${imgDirUrl}/selected_pen.png`,
      "active": false
    },
    {
      "id": 2,
      "pagePath": "/mine",
      "text": "我的",
      "iconPath": `${imgDirUrl}/mine.png`,
      "selectedIconPath": `${imgDirUrl}/selected_mine.png`,
      "active": false
    }
  ]
};

export default createStore(reducer, data, storeEnhancers);
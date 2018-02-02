import { TOGGLE_PAGE } from './actionTypes';
export default (state=[], action) => {
  switch(action.type){
    case TOGGLE_PAGE: {
      return state.map(item => {
        if(item.id === action.id){
          return { ...item, active: true}
        }else{
          if(item.active === true){
            return { ...item, active: false}
          }else{
            return item;
          }
        }
      });
    }

    default: 
      return state;
  }
};
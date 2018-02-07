import React, {Component} from 'react';
import { imgDirUrl } from '../../../config';

class Item extends Comment{

  
  render(){
    <Link to="/mine" className="footer-link">
      <img  src={`${imgDirUrl}/mine.png`} className="footer-link-icon" />
      <span className="footer-link-text">我的</span>
    </Link>
  }
}

export default Item;
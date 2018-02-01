import React, {Component} from 'react';

class Item extends Comment{

  
  render(){
    <Link to="/mine" className="footer-link">
      <img  src={`${config.imgDirUrl}/mine.png`} className="footer-link-icon" />
      <span className="footer-link-text">我的</span>
    </Link>
  }
}

export default Item;
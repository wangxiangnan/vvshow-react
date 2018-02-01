import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';

class Footer extends Component{


  render(){
    return (
      <div className="footer">
        <Link to="/image" className="footer-link">
          <img src={`${config.imgDirUrl}/photo.png`} className="footer-link-icon" />
          <span className="footer-link-text">图片</span>
        </Link>

        <Link to="/word" className="footer-link">
          <img src={`${config.imgDirUrl}/pen.png`} className="footer-link-icon" />
          <span className="footer-link-text">文字</span>
        </Link>

        <Link to="/mine" className="footer-link">
          <img  src={`${config.imgDirUrl}/mine.png`} className="footer-link-icon" />
          <span className="footer-link-text">我的</span>
        </Link>

      </div>
    );
  }
}

export default Footer;
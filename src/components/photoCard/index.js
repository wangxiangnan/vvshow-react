import React from 'react';
import { Link } from 'react-router-dom';
const PhotoCard = ({avatarUrl, text, imgPath, sawNum, time, url, sawIconUrl}) => (
  <Link className="photo_card" to={url}>
      <div className="photo_card_hd">
        <img className="author_avatar" src={avatarUrl} />
        <span className="author_name">{text}</span>
      </div>

      <div className="photo_card_bd">
        <img className="prim_img" src={imgPath} mode="widthFix" />
      </div>

      <div className="photo_card_ft">
        <p className="saw_num" style={{backgroundImage: `url(${sawIconUrl})`}}>{sawNum}</p>
        <p className="time">{time}</p>
      </div>
    </Link>
);

export default PhotoCard;
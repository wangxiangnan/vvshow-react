import React from 'react';
import { Link } from 'react-router-dom';


const WordCard = ({ url, text, imgPath}) => (
  <Link
    to={url}
    style={{backgroundImage: `url(${imgPath})`}}
    className="menu-item tc" />
);
export default WordCard;
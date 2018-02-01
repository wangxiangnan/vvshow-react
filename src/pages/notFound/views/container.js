import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <h1>页面未找到</h1>
    <Link to="/" replace>点我返回首页</Link>
  </div>
);

export default NotFound;
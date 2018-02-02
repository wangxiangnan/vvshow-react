import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {view as Footer, actions} from '../../components/footer';
import MineData from './data';


class Photo extends Component{

  componentWillMount(){
    const isActive = this.props.tabBars.some(item => item.id === 2 && item.active);
    
    if(!isActive){
      document.title='微v秀-我的';
      this.props.togglePage(2);
    }
      
  }

  render(){
    return (
      <div className="mine">
        <div className="mine_bg page-bg" style={{ backgroundImage: `url(${MineData.bgPic})` }} ></div>
        <div className="mine-hd">
          <div className="mine_hd_bg" bindtap="replaceBgPic"></div>
          <img className="avatar" src={MineData.userInfo || MineData.defaultAvatarUrl} />
          
          <div className="user-name">{MineData.userInfo || '素颜'}</div>
          
          
          <button className="login_btn" >点击登录</button>
          
          
        </div>

        <div className="mine-bd">
          <div className="mine-list gf f13">
            {
              MineData.mineList.map(item => (
                <Link to={item.url} key={item.id} style={{ backgroundColor: item.bgColor}} className="mine-item relative">
                  <span className="list_text absolute">{item.name}</span>
                  <img src={item.icon} mode="widthFix" className="absolute item_icon" />
                  <button className="contact_btn" open-type="contact">进入客服会话</button>
                </Link>
              ))
            }

            
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tabBars: state.tabBars
});

const mapDispatchToProps = (dispatch) => ({
  togglePage: (id) => dispatch(actions.togglePage(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Photo);
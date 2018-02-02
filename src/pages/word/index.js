import React, { Component } from 'react';
import {connect} from 'react-redux';
import {view as Footer, actions} from '../../components/footer';
import WordData from './wordData';
import WordCard from './views/wordCard';
import config from '../../config';

class Photo extends Component{

  componentWillMount(){
    const isActive = this.props.tabBars.some(item => item.id === 1 && item.active)
    if(!isActive){
      document.title='微v秀-文字控';
      this.props.togglePage(1);
    }
  }

  render(){
    return (
      <div className="mine">
      <div className="word">
        <div className="word-bg" style={{backgroundImage: `url(${WordData.wordBgUrl})`}}></div>
        <div className="word-hd">
          <div className="word-title lh1 tc gb7 f12">文字病毒 一触即发</div>
        </div>

        <div className="word-bd">
          <div className="menu">
          {
            WordData.wordList.map(item => (
              <WordCard key={item.id} {...item} />
            ))
          }
          </div>
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
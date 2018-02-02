import React, { Component } from 'react';
import {connect} from 'react-redux';
import {view as Footer, actions} from '../../components/footer';
import PhotoCard from '../../components/photoCard';
import photoData from './photoData';


class Photo extends Component{

  componentDidMount(){
    const isActive = this.props.tabBars.some(item => item.id === 0 && item.active)
    if(!isActive){
      document.title='微v秀-图片控';
      this.props.togglePage(0);
    }
    console.log(photoData);
  }

  render(){
    return (
      <div className="photo">
        <div className="page-bg photo-bg"></div>
        {
          photoData.map(item => (
            <PhotoCard {...item}
              key={item.id}
             />  
          ))
        }
        
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

/**
 * 
 * 
 * <div className="photo">
        <div className="page-bg photo-bg"></div>
        <PhotoCard />
        <Footer />
      </div>
 */
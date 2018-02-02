import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import { connect } from 'react-redux';

const ActiveStyle = {
  color: "#ea5e8b"
};

class Footer extends Component{

  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      hidden: false,
      scrollTop: 0
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e){
    let curScrollTop = document.documentElement.scrollTop;
    if(curScrollTop > this.state.scrollTop){ //往上划
      !this.state.hidden && this.setState({
        hidden: true
      })
    }else{
      this.state.hidden && this.setState({
        hidden: false
      })
    }

    this.setState({
      scrollTop: curScrollTop
    });
  }

  render(){
    return (
      <div className="footer" style={{display: this.state.hidden? 'none': ''}}>
        {
          this.props.tabBars.map(item => (
            <Link to={item.pagePath} replace key={item.id} className="footer-link">
              <img src={item.active? item.selectedIconPath: item.iconPath} className="footer-link-icon" />
              <span style={item.active? ActiveStyle: {}} className="footer-link-text">{item.text}</span>
            </Link>
          ))
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tabBars: state.tabBars
});
export default connect(mapStateToProps)(Footer);

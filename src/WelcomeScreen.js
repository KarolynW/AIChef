import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/WelcomeScreen_elImage_274215.png';
import btn_icon_620772 from './images/btn_icon_620772.png';
import BottomNav from './BottomNav';
import btn_icon_back_welcome from './images/btn_icon_back_welcome.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class WelcomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      webcontent2: 'https://theaichef.co.uk/app-news',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elImage = async () => {
    // Go to screen 'Welcome'
    this.props.appActions.goToScreen('welcome');
  
  }
  
  
  onClick_elSettings = async () => {
    // Go to screen 'Your Account'
    this.props.appActions.goToScreen('yourAccount', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      boxSizing: 'border-box',
      backgroundColor: 'black',
     };
    const style_elWebcontent2 = {
      pointerEvents: 'auto',
     };
    const style_elImage = {
      height: 'auto',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elSettings = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_620772+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elTextBlock = {
      color: '#feffff',
      textAlign: 'left',
     };
    
    return (
      <div className="AppScreen WelcomeScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
          
          <iframe className="elWebcontent2" style={style_elWebcontent2} src={this.state.webcontent2}  />
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elSpacer">
            <div />
          </div>
          
          <div className="elImage">
            <img style={style_elImage} src={img_elImage} alt="" onClick={this.onClick_elImage}  />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Welcome</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_welcome} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <button className="actionFont elSettings" style={style_elSettings} onClick={this.onClick_elSettings}  />
            <div className="hasNestedComps elBottomNav">
              <BottomNav ref={(el)=> this._elBottomNav = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="baseFont elTextBlock" style={style_elTextBlock}>
              <div>{this.props.locStrings.welcome_textblock_176689}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

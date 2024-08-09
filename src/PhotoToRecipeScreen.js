import React, { Component } from 'react';
import './App.css';
import Camera from './Camera';
import BottomNav from './BottomNav';
import btn_icon_620772 from './images/btn_icon_620772.png';
import btn_icon_back_phototorecipe from './images/btn_icon_back_phototorecipe.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class PhotoToRecipeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
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
    const style_elCamera = {
      pointerEvents: 'auto',
     };
    
    const style_elRect = {
      background: 'rgba(253, 254, 255, 1.000)',
      opacity: 0.90,
     };
    const style_elTextBlock = {
      color: '#424242',
      textAlign: 'center',
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
    
    return (
      <div className="AppScreen PhotoToRecipeScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elCamera">
            <div style={style_elCamera}>
              <Camera ref={(el)=> this._elCamera = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Photo to Recipe</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_phototorecipe} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elBottomNav">
              <BottomNav ref={(el)=> this._elBottomNav = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="elRect" style={style_elRect} />
            <div className="headlineFont elTextBlock" style={style_elTextBlock}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.photorecipe_textblock_692584.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <button className="actionFont elSettings" style={style_elSettings} onClick={this.onClick_elSettings}  />
          </div>
        </div>
      </div>
    )
  }
  
}

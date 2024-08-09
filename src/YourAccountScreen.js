import React, { Component } from 'react';
import './App.css';
import BottomNav from './BottomNav';
import btn_icon_206646 from './images/btn_icon_206646.png';
import btn_icon_back_youraccount from './images/btn_icon_back_youraccount.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class YourAccountScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, password, email

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

  onClick_elButton = async () => {
    // 'Sign out (lock gate)' action.
    this.clearSavedLogin();
    sessionStorage.setItem('loginStatus_login', 'inactive');
    this.props.appActions.goToScreen('login');
  
  }
  
  
  onClick_elSettings = async () => {
    // Go to screen 'Your Account'
    this.props.appActions.goToScreen('yourAccount', { transitionId: 'fadeIn' });
  
  }
  
  
  
  clearSavedLogin = () => {
    localStorage.removeItem('xano_authToken');
    localStorage.removeItem('xano_loginTimestamp');
    localStorage.removeItem('xano_userId');
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
    const style_elText = {
      color: '#feffff',
      textAlign: 'left',
     };
    
    const value_text2 = ((val) => {
      // make sure value is in string format
      if (val instanceof String || typeof val === 'string') return val;
      else {
        try {
          return JSON.stringify(val);
        }
        catch (e) {
          return val.toString();
        }
      }
    })(this.props.email);
    
    const style_elText2 = {
      color: '#feffff',
      textAlign: 'left',
     };
    const style_elTextCopy = {
      color: '#feffff',
      textAlign: 'left',
     };
    
    const value_textCopy2 = ((val) => {
      // make sure value is in string format
      if (val instanceof String || typeof val === 'string') return val;
      else {
        try {
          return JSON.stringify(val);
        }
        catch (e) {
          return val.toString();
        }
      }
    })(this.props.password);
    
    const style_elTextCopy2 = {
      color: '#feffff',
      textAlign: 'left',
     };
    
    const style_elButton = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elSettings = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_206646+')',
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
      <div className="AppScreen YourAccountScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div>{this.props.locStrings.youraccount_text_23044}</div>
            </div>
          </div>
          
          <div className="elText2">
            <div className="baseFont" style={style_elText2}>
              <div>{value_text2}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="headlineFont" style={style_elTextCopy}>
              <div>{this.props.locStrings.youraccount_textcopy_832947}</div>
            </div>
          </div>
          
          <div className="elTextCopy2">
            <div className="baseFont" style={style_elTextCopy2}>
              <div>{value_textCopy2}</div>
            </div>
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.accountinfo_button_223389}
            </Button>
          </div>
          
          <div className="elSpacer">
            <div />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Your Account</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_youraccount} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elBottomNav">
              <BottomNav ref={(el)=> this._elBottomNav = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <button className="actionFont elSettings" style={style_elSettings} onClick={this.onClick_elSettings}  />
          </div>
        </div>
      </div>
    )
  }
  
}

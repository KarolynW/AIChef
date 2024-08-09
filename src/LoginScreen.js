import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/WelcomeScreen_elImage_274215.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

export default class LoginScreen extends Component {

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

  textInputChanged_elFieldEmail = (event) => {
    this.setState({fieldEmail: event.target.value});
  }
  
  getValue_elFieldEmail = () => {
    return this.state.fieldEmail || '';
  }
  
  textInputChanged_elFieldPassword = (event) => {
    this.setState({fieldPassword: event.target.value});
  }
  
  getValue_elFieldPassword = () => {
    return this.state.fieldPassword || '';
  }
  
  onClick_elButton = async () => {
    // 'Unlock gate' action.
    const dataFromElements = {  // This object contains the data collected from the UI
      text: this.props.locStrings.login_text_935247,
      fieldEmail: this.getValue_elFieldEmail(),
      fieldPassword: this.getValue_elFieldPassword(),
      text2: this.props.locStrings.login_text2_96662,
    };
    
    this.sendLogin(dataFromElements, (err) => {
      if (err) {
        console.log('** login failed: ', err);
        sessionStorage.setItem('loginStatus_login', 'failed');
        this.props.appActions.goToScreen('error', { errorText: ''+err });
      } else {
        sessionStorage.setItem('loginStatus_login', 'active');
        this.props.appActions.goToScreen('welcome');
      }
    });
  
  }
  
  
  
  sendLogin = (dataFromElements, finishedCallback) => {
    this.props.appActions.setState({loading: true});
  
    const url = "https://x8ki-letl-twmt.n7.xano.io/api:dHf_6RWb/auth/login";
    
    const fetchOpts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": this.getValue_elFieldEmail(),
        "password": this.getValue_elFieldPassword(),
      }),
    };
    
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        let authToken = json.authToken;
        localStorage.setItem('xano_authToken', authToken);
        let time = (new Date()).getTime();
        localStorage.setItem('xano_loginTimestamp', time);
  
        
      this.props.appActions.setState({loading: false});
      finishedCallback(null);
      
      })
      .catch((exc) => {
        this.props.appActions.setState({loading: false});
        finishedCallback(exc.message);
      });
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
    
    const style_elCard = {
      width: '100%',
      height: '100%',
     };
    const style_elCard_outer = {
      boxSizing: 'border-box',
      backgroundColor: 'black',
      filter: 'drop-shadow(0.0px 2.3px 18px rgba(0, 0, 0, 0.1600))',
      overflow: 'visible',
     };
    const style_elText = {
      color: '#feffff',
      textAlign: 'center',
     };
    
    const style_elFieldEmail = {
      display: 'block',
      paddingTop: 0,
      color: '#feffff',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elFieldPassword = {
      display: 'block',
      paddingTop: 0,
      color: '#feffff',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elImage = {
      height: 'auto',
     };
    const style_elText2 = {
      color: '#feffff',
      textAlign: 'center',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className="elCard" style={style_elCard_outer}>
            <div className="appBg" style={style_elCard} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.props.locStrings.login_text_935247}</div>
            </div>
          </div>
          
          <div className="elFieldEmail">
            <Input className="baseFont" style={style_elFieldEmail} type="email" placeholder={this.props.locStrings.login_field_114742} onChange={this.textInputChanged_elFieldEmail} value={this.getValue_elFieldEmail()}  />
          </div>
          
          <div className="elFieldPassword">
            <Input className="baseFont" style={style_elFieldPassword} type="password" placeholder={this.props.locStrings.login_fieldemailcopy_54631} onChange={this.textInputChanged_elFieldPassword} value={this.getValue_elFieldPassword()}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.login_button_604622}
            </Button>
          </div>
          
          <div className="elImage">
            <img style={style_elImage} src={img_elImage} alt=""  />
          </div>
          
          <div className="elText2">
            <div className="headlineFont" style={style_elText2}>
              <div>{this.props.locStrings.login_text2_96662}</div>
            </div>
          </div>
          
          <div className="elSpacer">
            <div />
          </div>
        </div>
        
      </div>
    )
  }
  
}

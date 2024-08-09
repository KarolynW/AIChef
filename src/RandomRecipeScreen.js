import React, { Component } from 'react';
import './App.css';
import btn_icon_799083 from './images/btn_icon_799083.png';
import BottomNav from './BottomNav';
import btn_icon_675538 from './images/btn_icon_675538.png';
import btn_icon_back_randomrecipe from './images/btn_icon_back_randomrecipe.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class RandomRecipeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, randomOutput

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

  onClick_elIconButton = async () => {
    await this.sendData_elIconButton_to_xano1();
  
  }
  
  
  onClick_elSettings = async () => {
    // Go to screen 'Your Account'
    this.props.appActions.goToScreen('yourAccount', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_elIconButton_to_xano1 = () => {
    let endCb = () => {}
  
    // This object contains the data collected from the UI
    let dataFromElements = {
      textBlock: this.props.locStrings.gorandom_textblock_617587,
      text: this.props.locStrings.randomrecipe_text_82237,
    };
    
    
    this.props.appActions.setState({loading: true});
      
    const expandSlotTemplateString = this.props.appActions.dataSheets['localizationSheet'].expandSlotTemplateString;
    
    const url = expandSlotTemplateString(`https://x8ki-letl-twmt.n7.xano.io/api:dHf_6RWb/randomRecipe`, this.props.appActions.dataSlots);
      
    let headers = {
      'Content-Type': 'application/json'
    };
    
    let authToken = localStorage.getItem('xano_authToken');
    if (authToken != null) {
      headers['Authorization'] = 'Bearer ' + authToken;
    }
    
    const fetchOpts = {
      method: "POST",
      headers: headers,
      
      body: `{
     "RandomiseMe":1
    }`,
    
    };
    
    return fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this.props.appActions.setState({loading: false});
        ((v) => { this.props.appActions.updateDataSlot("ds_randomRecipe", v) })(json);
      })
      .catch((exc) => {
        this.props.appActions.setState({loading: false});
        console.error(exc.message);
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
    
    const style_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_799083+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '74.101%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    let cssClass_progress = 'circularProgressIndicator';
    if (this.props.appActions.isLoading()) 
      cssClass_progress += ' circularProgressIndicator-active';
    
    
    const value_text = ((val) => {
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
    })((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_randomRecipe'] : ''));
    
    const style_elText = {
      color: '#feffff',
      textAlign: 'left',
     };
    
    const value_textBlock = ((val) => {
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
    })(this.props.RandomOutput);
    
    const style_elTextBlock = {
      color: '#feffff',
      textAlign: 'left',
      display: 'none',
     };
    
    const style_elSettings = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_675538+')',
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
      <div className="AppScreen RandomRecipeScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elCard" style={style_elCard_outer}>
            <div className="primaryBg" style={style_elCard} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elSpacer">
            <div />
          </div>
          
          <div className="elIconButton">
            <button className="actionFont" style={style_elIconButton} onClick={this.onClick_elIconButton}  />
          </div>
          
          <div className="elProgress">
            <div>
              <svg className={cssClass_progress}>
                <circle className="circularProgress-animatedPath" style={{stroke: '#424242'}} cx="25" cy="25" r="17" fill="none" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
            </div>
          </div>
          
          <div className="flowRow flowRow_RandomRecipeScreen_elText_82237">
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{value_text}</div>
            </div>
          </div>
          
          </div>
          <div className="elSpacer2">
            <div />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Random Recipe</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_randomrecipe} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="baseFont elTextBlock" style={style_elTextBlock}>
              <div>{value_textBlock}</div>
            </div>
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

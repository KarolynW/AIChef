import React, { Component } from 'react';
import './App.css';
import btn_icon_back_error from './images/btn_icon_back_error.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class ErrorScreen extends Component {

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
      textAlign: 'center',
     };
    
    return (
      <div className="AppScreen ErrorScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div>{this.props.locStrings.error_text_717854}</div>
            </div>
          </div>
          
          <div className="elSpacer">
            <div />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Error</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_error} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}

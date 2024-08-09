import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/CommunityFridgeDetailsScreen_elImage_162421.jpg';
import BottomNav from './BottomNav';
import btn_icon_back_communityfridgedetails from './images/btn_icon_back_communityfridgedetails.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class CommunityFridgeDetailsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, dataSheetRow

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
    const style_elImage = {
      backgroundImage: 'url('+this.props.appActions.createImageUrlFromProp(this.props.dataSheetRow ? this.props.dataSheetRow.Fridge_Image : '')+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
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
    })(this.props.dataSheetRow ? this.props.dataSheetRow.fridge_name : '');
    
    const style_elText = {
      color: '#feffff',
      textAlign: 'center',
     };
    
    const value_textCopy = ((val) => {
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
    })(this.props.dataSheetRow ? this.props.dataSheetRow.fridge_address : '');
    
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
    })(this.props.dataSheetRow ? this.props.dataSheetRow.fridge_description : '');
    
    const style_elTextCopy2 = {
      color: '#feffff',
      textAlign: 'left',
     };
    
    return (
      <div className="AppScreen CommunityFridgeDetailsScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elSpacer">
            <div />
          </div>
          
          <div className="elImage">
            <div style={style_elImage} />
          </div>
          
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div>{value_text}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="baseFont" style={style_elTextCopy}>
              <div>{value_textCopy}</div>
            </div>
          </div>
          
          <div className="elTextCopy2">
            <div className="baseFont" style={style_elTextCopy2}>
              <div>{value_textCopy2}</div>
            </div>
          </div>
          
          <div className="elSpacer2">
            <div />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Community Fridge Details</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_communityfridgedetails} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elBottomNav">
              <BottomNav ref={(el)=> this._elBottomNav = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

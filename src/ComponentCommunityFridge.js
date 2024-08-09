import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/CommunityFridgeDetailsScreen_elImage_162421.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class ComponentCommunityFridge extends Component {

  // Properties used by this component:
  // fridge_name, fridge_Image, fridge_address

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

  onClick_elImage = async () => {
    // Go to screen 'Community Fridge Details'
    this.props.appActions.goToScreen('communityFridgeDetails', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton = async () => {
    // Go to screen 'Community Fridge Details'
    this.props.appActions.goToScreen('communityFridgeDetails', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    const value_image = this.props.Fridge_Image;
    
    const style_elImage = {
      height: 'auto',
      borderRadius: '2.0px',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elImage_outer = {
      boxSizing: 'border-box',
      backgroundColor: 'black',
      padding: '2.0px',
      borderRadius: '2.0px',
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
    })(this.props.fridge_name);
    
    const style_elText = {
      color: '#feffff',
      textAlign: 'left',
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
    })(this.props.fridge_address);
    
    const style_elTextCopy = {
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
    
    return (
      <div className="ComponentCommunityFridge appBg">
        <div className="layoutFlow">
          <div className="elImage" style={style_elImage_outer}>
            <img style={style_elImage} src={this.props.appActions.createImageUrlFromProp(value_image)} alt="" onClick={this.onClick_elImage}  />
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
          
          <div className="elSpacer">
            <div />
          </div>
        </div>
        
        <div className="foreground">
          <Button className="actionFont elButton" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
            {this.props.locStrings.componentcommunityfridge_button_19972}
          </Button>
        </div>
      </div>
    )
  }
  
}

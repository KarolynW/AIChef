import React, { Component } from 'react';
import './App.css';
import btn_icon_423828 from './images/btn_icon_423828.png';
import btn_icon_825992 from './images/btn_icon_825992.png';
import btn_icon_909228 from './images/btn_icon_909228.png';
import btn_icon_45802 from './images/btn_icon_45802.png';
import btn_icon_148820 from './images/btn_icon_148820.png';

export default class BottomNav extends Component {

  // This component doesn't use any properties

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

  onClick_elRecipeCompleter = async () => {
    // Go to screen 'Recipe Completer'
    this.props.appActions.goToScreen('recipeCompleter', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elRandomRecipe = async () => {
    // Go to screen 'Random Recipe'
    this.props.appActions.goToScreen('randomRecipe', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elHome = async () => {
    // Go to screen 'Welcome'
    this.props.appActions.goToScreen('welcome', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elFridgeLocator = async () => {
    // Go to screen 'Community Fridges'
    this.props.appActions.goToScreen('communityFridges', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elPhotoChef = async () => {
    // Go to screen 'Photo to Recipe'
    this.props.appActions.goToScreen('photoToRecipe', { ...this.props });
  
  }
  
  
  render() {
    
    const style_elRect2 = {
      background: 'rgba(0, 0, 0, 1.000)',
      border: '0.9px solid rgba(146, 146, 146, 0.9000)',
     };
    
    const style_elRecipeCompleter = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_423828+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'center',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elRandomRecipe = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_825992+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'center',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elHome = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_909228+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'center',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elFridgeLocator = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_45802+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'center',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elPhotoChef = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_148820+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'center',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="BottomNav">
        <div className="foreground">
          <div className="elRect2" style={style_elRect2} />
          <button className="actionFont elRecipeCompleter" style={style_elRecipeCompleter} onClick={this.onClick_elRecipeCompleter}  />
          <button className="actionFont elRandomRecipe" style={style_elRandomRecipe} onClick={this.onClick_elRandomRecipe}  />
          <button className="actionFont elHome" style={style_elHome} onClick={this.onClick_elHome}  />
          <button className="actionFont elFridgeLocator" style={style_elFridgeLocator} onClick={this.onClick_elFridgeLocator}  />
          <button className="actionFont elPhotoChef" style={style_elPhotoChef} onClick={this.onClick_elPhotoChef}  />
        </div>
      </div>
    )
  }
  
}

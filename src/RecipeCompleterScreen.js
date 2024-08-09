import React, { Component } from 'react';
import './App.css';
import BottomNav from './BottomNav';
import btn_icon_176336 from './images/btn_icon_176336.png';
import btn_icon_back_recipecompleter from './images/btn_icon_back_recipecompleter.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class RecipeCompleterScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      elValidator_visible: false,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  textInputChanged_elField = (event) => {
    this.setState({field: event.target.value});
  }
  
  getValue_elField = () => {
    return this.state.field || '';
  }
  
  textInputChanged_elField2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  getValue_elField2 = () => {
    return this.state.field2 || '';
  }
  
  textInputChanged_elField3 = (event) => {
    this.setState({field3: event.target.value});
  }
  
  getValue_elField3 = () => {
    return this.state.field3 || '';
  }
  
  textInputChanged_elField4 = (event) => {
    this.setState({field4: event.target.value});
  }
  
  getValue_elField4 = () => {
    return this.state.field4 || '';
  }
  
  textInputChanged_elField5 = (event) => {
    this.setState({field5: event.target.value});
  }
  
  getValue_elField5 = () => {
    return this.state.field5 || '';
  }
  
  onClick_elButton = async () => {
    // Perform action 'Validate' on element 'validator'
    let transformFunc = function(input, name, value) {
      // This function is executed for each validated element with the following parameters:
      //   input: precalculated value based on the default validation logic (true/false)
      //   name: name of the element/data slot
      //   value: content value of element/data slot
      //
      // Example:
      //   if (name == 'field') {
      //     if (value == 'Hello') return true;
      //   }
      //
      
      if (name === "field" || name === "field 2" || name === "field 3" || name === "field 4" || name === "field 5"){
        return value.length <=50;
      }
      return input;};
    
    const items = [
      { result: true /* validate this.getValue_elField2() */, name: 'field 2', value: this.getValue_elField2() },
      { result: true /* validate this.getValue_elField3() */, name: 'field 3', value: this.getValue_elField3() },
      { result: true /* validate this.getValue_elField4() */, name: 'field 4', value: this.getValue_elField4() },
      { result: true /* validate this.getValue_elField() */, name: 'field', value: this.getValue_elField() },
      { result: true /* validate this.getValue_elField5() */, name: 'field 5', value: this.getValue_elField5() },
    ];
    
    let valid = true;
    for (let i = 0; i < items.length; ++i) {
      let item = items[i];
      valid &= transformFunc(item.result, item.name, item.value);
      if ( !valid) {
        break;
      }
    };
    this.setState({elValidator_visible: !valid});
    
    if ( !valid) {
      return;
    }
  
    await this.sendData_elButton_to_xano1();
  
    // Clear internal state for data-providing elements in this component
    this.setState({
      textBlock2: (<div></div>),
      textBlock2_plainText: "",
      field: "",
      field2: "",
      field3: "",
      field4: "",
      validator: (<div></div>),
      validator_plainText: "",
      field5: "",
      text: (<div></div>),
      text_plainText: "",
    });
  
  
  }
  
  
  onClick_elSettings = async () => {
    // Go to screen 'Your Account'
    this.props.appActions.goToScreen('yourAccount', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_elButton_to_xano1 = () => {
    let endCb = () => {}
  
    // This object contains the data collected from the UI
    let dataFromElements = {
      textBlock2: this.props.locStrings.start_textblock2_1035266,
      field: this.getValue_elField(),
      field2: this.getValue_elField2(),
      field3: this.getValue_elField3(),
      field4: this.getValue_elField4(),
      validator: this.props.locStrings.start_validator_1031772,
      field5: this.getValue_elField5(),
      text: this.props.locStrings.start_text_886010,
    };
    
    
    this.props.appActions.setState({loading: true});
      
    const expandSlotTemplateString = this.props.appActions.dataSheets['localizationSheet'].expandSlotTemplateString;
    
    const url = expandSlotTemplateString(`https://x8ki-letl-twmt.n7.xano.io/api:dHf_6RWb/recipeComplete`, this.props.appActions.dataSlots);
      
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
     "ing1":"${this.state.field}",
     "ing2":"${this.state.field2}",
    "ing3":"${this.state.field3}",
    "ing4":"${this.state.field4}",
    "ing5":"${this.state.field5}"
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
        ((v) => { this.props.appActions.updateDataSlot("ds_Output", v) })(json);
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
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      boxSizing: 'border-box',
      backgroundColor: 'black',
     };
    
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      color: '#424242',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField2 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      color: '#424242',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField3 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      color: '#424242',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField4 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      color: '#424242',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elValidator = {
      color: '#feffff',
      textAlign: 'left',
     };
    const elValidator = this.state.elValidator_visible ? (
      <div className="elValidator">
        <div className="baseFont" style={style_elValidator}>
          <div>{this.props.locStrings.start_validator_1031772}</div>
        </div>
      </div>
      
     ) : null;
    
    const style_elField5 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      color: '#424242',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
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
    })((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_Output'] : ''));
    
    const style_elText = {
      color: '#feffff',
      textAlign: 'center',
     };
    
    const style_elRect = {
      background: 'rgba(66, 66, 66, 1.000)',
      opacity: 0.80,
     };
    const style_elTextBlock2 = {
      color: '#feffff',
      textAlign: 'center',
     };
    
    const style_elSettings = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_176336+')',
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
      <div className="AppScreen RecipeCompleterScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elSpacer2">
            <div />
          </div>
          
          <div className="elField">
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.start_field_615676} onChange={this.textInputChanged_elField} value={this.getValue_elField()}  />
          </div>
          
          <div className="elField2">
            <input className="baseFont" style={style_elField2} type="text" placeholder={this.props.locStrings.start_field2_964228} onChange={this.textInputChanged_elField2} value={this.getValue_elField2()}  />
          </div>
          
          <div className="elField3">
            <input className="baseFont" style={style_elField3} type="text" placeholder={this.props.locStrings.start_field3_257319} onChange={this.textInputChanged_elField3} value={this.getValue_elField3()}  />
          </div>
          
          <div className="elField4">
            <input className="baseFont" style={style_elField4} type="text" placeholder={this.props.locStrings.start_field4_445610} onChange={this.textInputChanged_elField4} value={this.getValue_elField4()}  />
          </div>
          
          <div className="flowRow flowRow_RecipeCompleterScreen_elValidator_1031772">
          { elValidator }
          </div>
          <div className="elField5">
            <input className="baseFont" style={style_elField5} type="text" placeholder={this.props.locStrings.start_field5_379989} onChange={this.textInputChanged_elField5} value={this.getValue_elField5()}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.start_button_784321}
            </Button>
          </div>
          
          <div className="flowRow flowRow_RecipeCompleterScreen_elProgress_688562">
          <div className="elProgress">
            <div>
              <svg className={cssClass_progress}>
                <circle className="circularProgress-animatedPath" style={{stroke: '#424242'}} cx="25" cy="25" r="17" fill="none" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
            </div>
          </div>
          
          </div>
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{value_text}</div>
            </div>
          </div>
          
          <div className="elSpacer">
            <div />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Recipe Completer</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_recipecompleter} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="elRect" style={style_elRect} />
            <div className="hasNestedComps elBottomNav">
              <BottomNav ref={(el)=> this._elBottomNav = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="baseFont elTextBlock2" style={style_elTextBlock2}>
              <div>{this.props.locStrings.start_textblock2_1035266}</div>
            </div>
            <button className="actionFont elSettings" style={style_elSettings} onClick={this.onClick_elSettings}  />
          </div>
        </div>
      </div>
    )
  }
  
}

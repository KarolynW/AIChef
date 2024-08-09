import React, { Component } from 'react';
import './App.css';
import ComponentCommunityFridge from './ComponentCommunityFridge';
import BottomNav from './BottomNav';
import btn_icon_867856 from './images/btn_icon_867856.png';
import btn_icon_back_communityfridges from './images/btn_icon_back_communityfridges.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class CommunityFridgesScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
    {
      let dataSheet = this.props.appActions.dataSheets['communityFridges'];
      let serviceOptions = this.props.appActions.serviceOptions_communityFridges;
      if ( !this.props.appActions.dataSheetLoaded['communityFridges']) {
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("/communityfridges", this.props.appActions.dataSlots);
        this.props.appActions.loadData_xano1(dataSheet, serviceOptions, true);
        this.props.appActions.dataSheetLoaded['communityFridges'] = true;
      }
      this._dataSheetLoadTimer_communityFridges = setInterval(() => {  // Reload data regularly
        serviceOptions.servicePath = dataSheet.expandSlotTemplateString("/communityfridges", this.props.appActions.dataSlots);
        this.props.appActions.loadData_xano1(dataSheet, serviceOptions, false);
      }, 10000);
    }
  }

  componentWillUnmount() {
    clearInterval(this._dataSheetLoadTimer_communityFridges);
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
    
    // eslint-disable-next-line
    const dataSheet_communityFridges = this.props.dataSheets['communityFridges'];
    const style_elCard = {
      width: '100%',
      height: '100%',
     };
    const style_elCard_outer = {
      boxSizing: 'border-box',
      backgroundColor: '#5e5e5e',
      filter: 'drop-shadow(0.0px 2.3px 18px rgba(0, 0, 0, 0.1600))',
      overflow: 'visible',
     };
    
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('communityFridges').items);
    this._elList_items = [];
    
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    
    const style_elSettings = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_867856+')',
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
      <div className="AppScreen CommunityFridgesScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elCard" style={style_elCard_outer}>
            <div className="cardBg" style={style_elCard} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elSpacer">
            <div />
          </div>
          
          <div className="hasNestedComps elList">
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <ComponentCommunityFridge appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} dataSheetId={'communityFridges'} dataSheetRow={row} {...{ 'fridge_name': row['fridge_name'], 'Fridge_Image': row['Fridge_Image'], 'fridge_address': row['fridge_address'], }} ref={(el) => {if (el) this._elList_items.push(el)}} />;
                return (<div key={row.key}>
                    {itemComp}
                  </div>);
              })}
              <div className="marker" ref={(el)=> this._elList_endMarker = el} />
            </div>
          </div>
          
          <div className="elSpacer2">
            <div />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Community Fridges</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_communityfridges} alt="" style={{width: '50%'}} /></div>
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

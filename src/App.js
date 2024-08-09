import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
// eslint-disable-next-line
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// eslint-disable-next-line
import * as util from 'util';
import './App.css';
import CommunityFridgeDetailsScreen from './CommunityFridgeDetailsScreen.js';
import YourAccountScreen from './YourAccountScreen.js';
import RecipeCompleterScreen from './RecipeCompleterScreen.js';
import RandomRecipeScreen from './RandomRecipeScreen.js';
import CommunityFridgesScreen from './CommunityFridgesScreen.js';
import PhotoToRecipeScreen from './PhotoToRecipeScreen.js';
import WelcomeScreen from './WelcomeScreen.js';
import ErrorScreen from './ErrorScreen.js';
import LoginScreen from './LoginScreen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import DataSheet_GPT3Data from './DataSheet_GPT3Data.js';
import DataSheet_user from './DataSheet_user.js';
import DataSheet_communityFridges from './DataSheet_communityFridges.js';
import DataSheet_GPT3RandomRecipe from './DataSheet_GPT3RandomRecipe.js';
import DataSheet_GPT3HowtoMake from './DataSheet_GPT3HowtoMake.js';
import DataSheet_GPT3RecipeComplete from './DataSheet_GPT3RecipeComplete.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheets['GPT3Data'] = new DataSheet_GPT3Data('GPT3Data', this.dataSheetDidUpdate);
    this.dataSheets['user'] = new DataSheet_user('user', this.dataSheetDidUpdate);
    this.dataSheets['communityFridges'] = new DataSheet_communityFridges('communityFridges', this.dataSheetDidUpdate);
    this.dataSheets['GPT3RandomRecipe'] = new DataSheet_GPT3RandomRecipe('GPT3RandomRecipe', this.dataSheetDidUpdate);
    this.dataSheets['GPT3HowtoMake'] = new DataSheet_GPT3HowtoMake('GPT3HowtoMake', this.dataSheetDidUpdate);
    this.dataSheets['GPT3RecipeComplete'] = new DataSheet_GPT3RecipeComplete('GPT3RecipeComplete', this.dataSheetDidUpdate);
    this.dataSheetLoaded = {};

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_Ing1'] = "";
    this.dataSlots['ds_Ing2'] = "";
    this.dataSlots['ds_Ing3'] = "";
    this.dataSlots['ds_Ing4'] = "";
    this.dataSlots['ds_Ing5'] = "";
    this.dataSlots['ds_Output'] = "";
    this.dataSlots['ds_photo'] = "";
    this.dataSlots['ds_randomRecipe'] = "";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);


    this.serviceOptions_GPT3Data = {
      dataSlots: this.dataSlots,
      servicePath: "/gpt3data",
      query: "",
    };
    this.dataSheets['GPT3Data'].appActions = this;
    this.serviceOptions_user = {
      dataSlots: this.dataSlots,
      servicePath: "/user",
      query: "",
    };
    this.dataSheets['user'].appActions = this;
    this.serviceOptions_communityFridges = {
      dataSlots: this.dataSlots,
      servicePath: "/communityfridges",
      query: "",
    };
    this.dataSheets['communityFridges'].appActions = this;
    this.serviceOptions_GPT3RandomRecipe = {
      dataSlots: this.dataSlots,
      servicePath: "/gpt3 randomrecipe",
      query: "",
    };
    this.dataSheets['GPT3RandomRecipe'].appActions = this;
    this.serviceOptions_GPT3HowtoMake = {
      dataSlots: this.dataSlots,
      servicePath: "/gpt3howtomake",
      query: "",
    };
    this.dataSheets['GPT3HowtoMake'].appActions = this;
    this.serviceOptions_GPT3RecipeComplete = {
      dataSlots: this.dataSlots,
      servicePath: "/gpt3recipecomplete",
      query: "",
    };
    this.dataSheets['GPT3RecipeComplete'].appActions = this;
    // Initialize web service plugin 'xano 1'
    
    
    this.xano_isLoggedIn = () => {
      let time = (new Date()).getTime();
      let prevTime = localStorage.getItem('xano_loginTimestamp');
      if (prevTime) {
        let diff = time - prevTime;
        if (diff < 1000*60*60*24) {
          let authToken = localStorage.getItem('xano_authToken');
          return authToken != null;
        }
      }
      return false;
    }
    

    this.state = {
      screenTransitionForward: true,
    }

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.
    this.props.history.push('/'+screenId, {...props, appActions: null, locStrings: null, dataSheets: null});
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    this.props.history.goBack();
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      let promise = sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
      this.setState({});
      return promise;
    }
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      let promise = sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});
      this.setState({});
      return promise;
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      let promise = sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
      this.setState({});
      return promise;
    }
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    if (value === this.dataSlots[slotId])
      return;

    this.dataSlots[slotId] = value;

    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }

    {
      let usedSlots = [];
      let servicePath = this.dataSheets['GPT3Data'].expandSlotTemplateString("/gpt3data", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_GPT3Data.servicePath = servicePath;
        this.loadData_xano1(this.dataSheets['GPT3Data'], this.serviceOptions_GPT3Data, false);
      }
    }
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['user'].expandSlotTemplateString("/user", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_user.servicePath = servicePath;
        this.loadData_xano1(this.dataSheets['user'], this.serviceOptions_user, false);
      }
    }
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['communityFridges'].expandSlotTemplateString("/communityfridges", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_communityFridges.servicePath = servicePath;
        this.loadData_xano1(this.dataSheets['communityFridges'], this.serviceOptions_communityFridges, false);
      }
    }
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['GPT3RandomRecipe'].expandSlotTemplateString("/gpt3 randomrecipe", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_GPT3RandomRecipe.servicePath = servicePath;
        this.loadData_xano1(this.dataSheets['GPT3RandomRecipe'], this.serviceOptions_GPT3RandomRecipe, false);
      }
    }
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['GPT3HowtoMake'].expandSlotTemplateString("/gpt3howtomake", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_GPT3HowtoMake.servicePath = servicePath;
        this.loadData_xano1(this.dataSheets['GPT3HowtoMake'], this.serviceOptions_GPT3HowtoMake, false);
      }
    }
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['GPT3RecipeComplete'].expandSlotTemplateString("/gpt3recipecomplete", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_GPT3RecipeComplete.servicePath = servicePath;
        this.loadData_xano1(this.dataSheets['GPT3RecipeComplete'], this.serviceOptions_GPT3RecipeComplete, false);
      }
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  loadData_xano1 = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Xano'.
    this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
    	dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const url = dataSheet.urlFromOptions(options);  // this method was written by the web service plugin
    
    let headers = {};
    let authToken = localStorage.getItem('xano_authToken');
    if (authToken != null) {
      headers['Authorization'] = 'Bearer ' + authToken;
    }
    
    const fetchOpts = {
      method: 'GET',
      headers: headers,
    };
    
    return fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        dataSheet.loadFromJson(json);
        fetchComplete(null, options);
      })
      .catch((exc) => {
        fetchComplete(exc, options);
      });
  }

  createImageUrlFromProp = (prop) => {
    if (prop instanceof Object) {
      if (prop.type != null && prop.type === 'image' && prop.path != null) {
        return "https://x8ki-letl-twmt.n7.xano.io"+prop.path;
      }
    }
    return prop;
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        'ds_Ing1': this.dataSlots['ds_Ing1'],
        'ds_Ing2': this.dataSlots['ds_Ing2'],
        'ds_Ing3': this.dataSlots['ds_Ing3'],
        'ds_Ing4': this.dataSlots['ds_Ing4'],
        'ds_Ing5': this.dataSlots['ds_Ing5'],
        'ds_Output': this.dataSlots['ds_Output'],
        'ds_photo': this.dataSlots['ds_photo'],
        'ds_randomRecipe': this.dataSlots['ds_randomRecipe'],
      };
      switch (screenId) {
        default:
          return null;
        case 'communityFridgeDetails':
          return (<CommunityFridgeDetailsScreen {...screenProps} />)
        case 'yourAccount':
          return (<YourAccountScreen {...screenProps} />)
        case 'recipeCompleter':
          return (<RecipeCompleterScreen {...screenProps} />)
        case 'randomRecipe':
          return (<RandomRecipeScreen {...screenProps} />)
        case 'communityFridges':
          return (<CommunityFridgesScreen {...screenProps} />)
        case 'photoToRecipe':
          return (<PhotoToRecipeScreen {...screenProps} />)
        case 'welcome':
          return (<WelcomeScreen {...screenProps} />)
        case 'error':
          return (<ErrorScreen {...screenProps} />)
        case 'login':
          return (<LoginScreen {...screenProps} />)
      }
    }

    return (
      <div className="App">
        <Switch>
          <Route path="/" render={(props) => {
            return (this.xano_isLoggedIn()) ? <Redirect to="/welcome" /> : <Redirect to="/login" />;
          }} exact />
          <Route path="/communityFridgeDetails" render={(props) => {
            return makeElementForScreen('communityFridgeDetails', props.location.state, true, true);
          }} />
          <Route path="/yourAccount" render={(props) => {
            return (this.xano_isLoggedIn()) ? makeElementForScreen('yourAccount', props.location.state, true, true) : <Redirect to="/login" />;
          }} />
          <Route path="/recipeCompleter" render={(props) => {
            return (this.xano_isLoggedIn()) ? makeElementForScreen('recipeCompleter', props.location.state, true, true) : <Redirect to="/login" />;
          }} />
          <Route path="/randomRecipe" render={(props) => {
            return (this.xano_isLoggedIn()) ? makeElementForScreen('randomRecipe', props.location.state, true, true) : <Redirect to="/login" />;
          }} />
          <Route path="/communityFridges" render={(props) => {
            return (this.xano_isLoggedIn()) ? makeElementForScreen('communityFridges', props.location.state, true, true) : <Redirect to="/login" />;
          }} />
          <Route path="/photoToRecipe" render={(props) => {
            return (this.xano_isLoggedIn()) ? makeElementForScreen('photoToRecipe', props.location.state, true, true) : <Redirect to="/login" />;
          }} />
          <Route path="/welcome" render={(props) => {
            return (this.xano_isLoggedIn()) ? makeElementForScreen('welcome', props.location.state, true, true) : <Redirect to="/login" />;
          }} />
          <Route path="/error" render={(props) => {
            return makeElementForScreen('error', props.location.state, true, true);
          }} />
          <Route path="/login" render={(props) => {
            return makeElementForScreen('login', props.location.state, true, true);
          }} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App)

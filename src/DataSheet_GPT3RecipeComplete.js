// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_GPT3RecipeComplete extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Xano'.
    
    item = {};
    this.items.push(item);
    item['output'] = "Ants are a delicacy in some countries, and can be eaten raw or cooked. To cook them, they should first be washed off to remove any dirt or debris. They should then be boiled for about 10 minutes until the water has evaporated and the ants have turned into a paste-like substance. The garlic is added to flavor it, and salt may also be used if desired.";
    item['timestampCreated'] = "1628762057754";
    item['ing5'] = "undefined";
    item['id'] = "1";
    item['ing2'] = "Garlic";
    item['created_at'] = "1628762057755";
    item['dietryReq'] = "undefined";
    item['ing3'] = "undefined";
    item['stringtextrequest'] = "State the name of a recipe that includes the following ingedients:Ants, Garlic, .  Briefly describe how to make the recipe.";
    item['ing4'] = "undefined";
    item['ing1'] = "Ants";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['output'] = "-1/2 cup of butter \n-1/4 cup of sugar \n-3 eggs, beaten \n-1 teaspoon vanilla extract \n-2 cups all purpose flour \n-3 teaspoons baking powder.";
    item['timestampCreated'] = "1628764346002";
    item['ing5'] = "undefined";
    item['id'] = "2";
    item['ing2'] = "undefined";
    item['created_at'] = "1628764346004";
    item['dietryReq'] = "undefined";
    item['ing3'] = "undefined";
    item['stringtextrequest'] = "State the name of a recipe that includes the following ingedients:.  Briefly describe how to make the recipe.";
    item['ing4'] = "undefined";
    item['ing1'] = "undefined";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['output'] = "-1/2 cup of butter \n-1/4 cup of sugar \n-1 egg \n-3 tablespoons of milk \n-1 teaspoon vanilla extract.\nThe ingredients are mixed together and then put in a pie crust to bake for about 45 minutes at 350 degrees Fahrenheit.";
    item['timestampCreated'] = "1628764822541";
    item['ing5'] = "undefined";
    item['id'] = "3";
    item['ing2'] = "undefined";
    item['created_at'] = "1628764822543";
    item['dietryReq'] = "undefined";
    item['ing3'] = "undefined";
    item['stringtextrequest'] = "State the name of a recipe that includes the following ingedients:.  Briefly describe how to make the recipe.";
    item['ing4'] = "undefined";
    item['ing1'] = "undefined";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['output'] = "The recipe is called Pear and Lemon Cream Tart. The ingredients are lemons, pears, cream, honey, sugar. To make the tart you need to peel and slice the pears into thin slices. You then mix together all of the ingredients in a bowl until it becomes a thick paste-like consistency. Then you pour this mixture onto your pre-baked pie crust and bake for about 45 minutes at 350 degrees Fahrenheit or until golden brown on top.";
    item['timestampCreated'] = "1628764852655";
    item['ing5'] = "Sugar";
    item['id'] = "4";
    item['ing2'] = "Pears";
    item['created_at'] = "1628764852657";
    item['dietryReq'] = "undefined";
    item['ing3'] = "Cream";
    item['stringtextrequest'] = "State the name of a recipe that includes the following ingedients:Lemons, Pears, Cream, Honey, Sugar..  Briefly describe how to make the recipe.";
    item['ing4'] = "Honey";
    item['ing1'] = "Lemons";
    item.key = key++;
  }

  
  urlFromOptions(options) {
    const baseUrl = "https://x8ki-letl-twmt.n7.xano.io/api:dHf_6RWb";
    
    let path = options.servicePath || '';
    if (path.length > 0 && path.substr(0, 1) !== '/' && baseUrl.substr(baseUrl.length - 1, 1) !== '/')
      path = '/'+path;
  
    let query = options.query || '';
    if (query.length > 0) {
      let dataSlots = options.dataSlots || {};
      query = "?" + this.expandSlotTemplateString(query, dataSlots);
    }
  
    return baseUrl + path + query; 
  }
  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  addItem(item, options) {
    super.addItem(item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
    let authToken = localStorage.getItem('xano_authToken');
    if (authToken != null) {
      headers['Authorization'] = 'Bearer ' + authToken;
    }
    
    const fetchOpts = {
      method: 'POST',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    return fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  removeItem(item, options) {
    super.removeItem(item, options);
    
    let url = this.urlFromOptions(options);
    let itemPathComp = "/" + item.id;
    if ( !url.endsWith(itemPathComp)) {
      url += itemPathComp;
    }
  
    let headers = {};
    headers['Content-Type'] = 'application/json';
    let authToken = localStorage.getItem('xano_authToken');
    if (authToken != null) {
      headers['Authorization'] = 'Bearer ' + authToken;
    }
  
    const fetchOpts = {
      method: 'DELETE',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    return fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  replaceItemByRowIndex(idx, item, options) {
    super.replaceItemByRowIndex(idx, item, options);
    
    let url = this.urlFromOptions(options);
    let itemPathComp = "/" + item.id;
    if ( !url.endsWith(itemPathComp)) {
      url += itemPathComp;
    }
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
    let authToken = localStorage.getItem('xano_authToken');
    if (authToken != null) {
      headers['Authorization'] = 'Bearer ' + authToken;
    }
  
    const fetchOpts = {
      method: 'POST',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    return fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  loadFromJson(json) {
    super.loadFromJson(json);
  
    /*for (let row of this.items) {
      for (let key of Object.keys(row)) {
        let val = row[key];
        if (val instanceof Object && val.type === 'image') {
          row[key] = "https://x8ki-letl-twmt.n7.xano.io" + val.path;
        }
      }
    }*/
  }
}

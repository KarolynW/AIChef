// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_GPT3HowtoMake extends DataSheetBase {

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

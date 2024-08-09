// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';
import datasheet_communityFridges_row0_fridge_Image from './images/datasheet_communityFridges_row0_fridge_Image.png';
import datasheet_communityFridges_row1_fridge_Image from './images/datasheet_communityFridges_row1_fridge_Image.png';

export default class DataSheet_communityFridges extends DataSheetBase {

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
    item['id'] = "1";
    item['created_at'] = "1628500393042";
    item['Fridge_Image'] = datasheet_communityFridges_row0_fridge_Image;
    item['fridge_address'] = "Paston Farm Community Centre, Freston, Paston Ridings, Peterborough PE4 7XB";
    item['fridge_description'] = "Paston Farm Community Centre has a cafe open all week and runs a variety of groups for the community. We have a mums and tots group, dadsnet group and mental health support. We also hire our our hall and rooms out for parties and other functions. We have a community fridge that is filled regularly that is free for everyone.";
    item['fridge_name'] = "Paston Farm Community Centre";
    item['Fridge_Location'] = {"type":"point","data":{"lng":-0.2437128,"lat":52.6081041}};
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['id'] = "2";
    item['created_at'] = "1628513713493";
    item['Fridge_Image'] = datasheet_communityFridges_row1_fridge_Image;
    item['fridge_address'] = "University of Hertfordshire, 40 Roberts Way, Hatfield, AL10 9JL";
    item['fridge_description'] = "In the UK each year 250,000 tonnes of the food that goes to waste is still edible! Would you believe that is enough for 650 million meals? We decided to tackle this issue, right here at the University, by introducing the community fridge.\nIf you don’t know what this project is, essentially, it is a place for everyone to share the food that they don’t use. That means students, staff and local shops and business. We currently have a partnership with Sainsbury’s who have been delivering fresh fruit and veg every week this year. This initiative is tackling the issue of food wastage and more importantly providing food to anyone who needs or wants it. There are now many community fridges opening all over England with over 30 registered fridges stretching from Glasgow to Bournemouth!\n\n\nWe opened the fridge on Wednesday 31 January 2018. We have since saved a whopping 2.4 tonnes of food from going to the bin! So, we would like to say a big THANK YOU! This food would have otherwise had gone to waste, so it’s a massive achievement.\n\n\nYou can find the fridge in The Oval on College Lane Campus, be sure to look out for deliveries. They come every Wednesday and don’t forget that if you have fresh fruit, veg or packaged food going spare, then you can donate it to the fridge too.";
    item['fridge_name'] = "University of Hertfordshire Community Fridge";
    item['Fridge_Location'] = {"type":"point","data":{"lng":-0.2357072,"lat":51.7519786}};
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

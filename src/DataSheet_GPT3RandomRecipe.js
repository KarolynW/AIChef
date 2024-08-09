// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_GPT3RandomRecipe extends DataSheetBase {

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
    item['timestampCreated'] = "1628769242825";
    item['id'] = "1";
    item['RandomiseMe'] = "1";
    item['RandomOutput'] = "";
    item['created_at'] = "1628769242827";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['timestampCreated'] = "1628769357468";
    item['id'] = "2";
    item['RandomiseMe'] = "1";
    item['RandomOutput'] = "Pork chops with tamarind sauce\n\n-6 pork chops, thinly sliced \n-1 tbsp salt \n-2 tbsp vegetable oil \n-1 can of tomato soup \n-1 watermelon radish, very thinly sliced or a small turnip in strips \n-5 cloves garlic, finely chopped \n-1 tsp black pepper, finely ground";
    item['created_at'] = "1628769357470";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['timestampCreated'] = "1628769878401";
    item['id'] = "3";
    item['RandomiseMe'] = "1";
    item['RandomOutput'] = "Voodoo Doll Cookies\n\nIngredients: sugar, flour, baking soda, eggs, food dye (blue), salt\n-Beat the eggs until fluffy. Add the sugar and mix well. Mix in flour, baking soda, and salt. Pour into cookie dough onto parchment paper sheets.   -Add drops of food coloring to make the apron the color desired. Bake at 375 degrees Fahrenheit for 9-10 minutes or until cooked all the way through.";
    item['created_at'] = "1628769878403";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['timestampCreated'] = "1628770170089";
    item['id'] = "4";
    item['RandomiseMe'] = "1";
    item['RandomOutput'] = "Explosive Fudge\n4 Tablespoons (½ stick) butter\n1/3 cup heavy whipping cream\n2 cups white sugar\n1 ½ teaspoons cocoa powder\n1 can sweetened condensed milk \n¼ teaspoon salt\n\nIn a medium saucepan over low heat, melt the butter. Add the heavy whipping cream and sugar. Stir until the mixture is blended together and bring to a boil. Once it’s boiling, reduce the heat to simmer for two minutes. Remove from the heat. Add cocoa powder, sweetened condensed milk and salt. Blend on low in 10 second increments until smooth. Pour into greased pan or baking sheet covered with wax paper and cool to room temperature in refrigerator or freezer before cutting into small squares or marshmallows shapes.";
    item['created_at'] = "1628770170090";
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

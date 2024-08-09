// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_431639";
    item['en'] = "The AI Chef";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock2_1035266";
    item['en'] = "Provide up to 5 ingredients and the AI Chef will create a meal for you:";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field_615676";
    item['en'] = "Ingredient 1";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field2_964228";
    item['en'] = "Ingredient 2";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field3_257319";
    item['en'] = "Ingredient 3";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field4_445610";
    item['en'] = "Ingredient 4";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field5_379989";
    item['en'] = "Ingredient 5";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock3_822096";
    item['en'] = "(RESPONSE)";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_784321";
    item['en'] = "Create me a Meal";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_886010";
    item['en'] = "{RESPONSE)";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_validator_1031772";
    item['en'] = "Your input is too long - please shorten";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_field_114742";
    item['en'] = "E-Mail";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_fieldemailcopy_54631";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_604622";
    item['en'] = "Login";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_935247";
    item['en'] = "Please enter your login";
    
    item = {};
    this.items.push(item);
    item['key'] = "error_text_717854";
    item['en'] = "Your E-mail or Password are incorrect. Pleae go back and try again.";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_button_223389";
    item['en'] = "Log Out";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_iconbutton_689531";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_iconbutton2_620772";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_iconbutton3_793911";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_iconbutton4_533547";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_iconbutton5_901631";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_iconbutton6_703447";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_recipecompleter_228898";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_randomrecipe_1022005";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_home_690625";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_fridgelocator_207669";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_photochef_321860";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_recipecompleter_972500";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_randomrecipe_436556";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_home_557706";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_fridgelocator_33565";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_photochef_740517";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_recipecompleter_243696";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_randomrecipe_827003";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_home_126433";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_fridgelocator_490674";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_photochef_170494";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_photochef_728389";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_fridgelocator_515159";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_home_519302";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_randomrecipe_546531";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_recipecompleter_194752";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_photochef_575376";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_fridgelocator_272135";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_home_229618";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_randomrecipe_800461";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_recipecompleter_761364";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_photochefcopy_235148";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_fridgelocatorcopy_22778";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_homecopy_773732";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_randomrecipecopy_229282";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_recipecompletercopy_142780";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityconnect_photochef_1030694";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityconnect_fridgelocator_708032";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityconnect_home_508914";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityconnect_randomrecipe_255022";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityconnect_recipecompleter_1021516";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "photorecipe_photochef_875185";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "photorecipe_fridgelocator_991871";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "photorecipe_home_630387";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "photorecipe_randomrecipe_797738";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "photorecipe_recipecompleter_534128";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_photochef_799031";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_fridgelocator_450225";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_home_32083";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_randomrecipe_209139";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_recipecompleter_943318";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_photochef_912181";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_fridgelocator_964726";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_home_804364";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_randomrecipe_1016798";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_recipecompleter_236169";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountinfo_settings_206646";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_settings_176336";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_settings_675538";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityconnect_settings_867856";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_recipecompleter_879971";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_randomrecipe_1030846";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_home_690316";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_fridgelocator_261566";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_photochef_397832";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_recipecompleter_315887";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_randomrecipe_173136";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_home_114731";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_fridgelocator_911207";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_photochef_998639";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_textblock_131389";
    item['en'] = "The AI Chef UK";
    
    item = {};
    this.items.push(item);
    item['key'] = "homepage_textblock2_654612";
    item['en'] = "This page will have news and updates from the webpage.";
    
    item = {};
    this.items.push(item);
    item['key'] = "photorecipe_textblock_692584";
    item['en'] = "This feature is under development.\n\nThis feature will allow you to take a photo of your food and ask the Chef for a recipe.";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_textblock_617587";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "gorandom_button_363595";
    item['en'] = "Randomise me a Recipe\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "componentcommunityfridge_text_730088";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "componentcommunityfridge_textcopy_735475";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "componentcommunityfridge_button_19972";
    item['en'] = "Details";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_text_557878";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_textcopy_363153";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_textcopy2_821469";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_text_23044";
    item['en'] = "Your E-Mail";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_text2_543807";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_textcopy_832947";
    item['en'] = "Your Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_textcopy2_197317";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_96662";
    item['en'] = "The AI Chef UK";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_recipecompleter_957040";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_randomrecipe_229536";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_home_444206";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_fridgelocator_944038";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_photochef_498733";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridges_recipecompleter_385581";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridges_randomrecipe_393169";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridges_home_32803";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridges_fridgelocator_272076";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridges_photochef_328546";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_recipecompleter_130897";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_randomrecipe_964650";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_home_631888";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_fridgelocator_66819";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_photochef_522177";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_recipecompleter_410138";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_randomrecipe_249392";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_home_549549";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_fridgelocator_145738";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_photochef_185707";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_recipecompleter_293514";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_randomrecipe_498779";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_home_144637";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_fridgelocator_708565";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "recipecompleter_photochef_685285";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "intro_text2_842419";
    item['en'] = "The AI Chef UK";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_photochef_353617";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_fridgelocator_613762";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_home_461645";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_randomrecipe_789812";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_recipecompleter_821229";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_photochef_122277";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_fridgelocator_319612";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_home_950572";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_randomrecipe_386633";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "youraccount_recipecompleter_681032";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_photochef_471832";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_fridgelocator_268230";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_home_69837";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_randomrecipe_787309";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_recipecompleter_221269";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridges_photochef_830124";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridges_fridgelocator_897785";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridges_home_956241";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridges_randomrecipe_183647";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridges_recipecompleter_540027";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "phototorecipe_photochef_685119";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "phototorecipe_fridgelocator_14939";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "phototorecipe_home_839239";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "phototorecipe_randomrecipe_249132";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "phototorecipe_recipecompleter_497419";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_photochef_920940";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_fridgelocator_117294";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_home_568463";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_randomrecipe_720807";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "communityfridgedetails_recipecompleter_349556";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "bottomnav_recipecompleter_423828";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "bottomnav_randomrecipe_825992";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "bottomnav_home_909228";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "bottomnav_fridgelocator_45802";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "bottomnav_photochef_148820";
    item['en'] = "Icon button";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_textblock_176689";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_textblock2_949376";
    item['en'] = "Randomise me a Recipe";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_text_82237";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_field_418861";
    item['en'] = "Meal name";
    
    item = {};
    this.items.push(item);
    item['key'] = "randomrecipe_iconbutton_625173";
    item['en'] = "Go";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}

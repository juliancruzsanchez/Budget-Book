/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./TabStripItem','sap/ui/Device','sap/ui/core/InvisibleText'],function(T,D,I){"use strict";var a={apiVersion:2};a.LEFT_OVERRFLOW_BTN_CLASS_NAME="sapMTSLeftOverflowButtons";a.RIGHT_OVERRFLOW_BTN_CLASS_NAME="sapMTSRightOverflowButtons";a.render=function(r,c){if(!c.getVisible()){return;}this.beginTabStrip(r,c);if(D.system.phone===true){this.renderTouchArea(r,c);}else{r.openStart("div",c.getId()+"-leftOverflowButtons");r.class(this.LEFT_OVERRFLOW_BTN_CLASS_NAME);r.openEnd();if(c.getAggregation("_leftArrowButton")){this.renderLeftOverflowButtons(r,c,false);}r.close("div");this.beginTabsContainer(r,c);this.renderItems(r,c);this.endTabsContainer(r);r.openStart("div",c.getId()+"-rightOverflowButtons");r.class(this.RIGHT_OVERRFLOW_BTN_CLASS_NAME);r.openEnd();if(c.getAggregation("_rightArrowButton")){this.renderRightOverflowButtons(r,c,false);}r.close("div");this.renderTouchArea(r,c);}this.endTabStrip(r);};a.renderItems=function(r,c){var i=c.getItems(),s=c.getSelectedItem();i.forEach(function(o){var d=s&&s===o.getId();this.renderItem(r,c,o,d);},this);};a.renderItem=function(r,c,i,s){var t=i.getTooltip(),d=g(i),m=i.getModified();r.openStart("div",i);r.attr("id",i.getId());r.class(T.CSS_CLASS);if(m){r.class(T.CSS_CLASS_MODIFIED);}if(s){r.class(T.CSS_CLASS_SELECTED);}if(t){r.attr("title",t);}r.accessibilityState(i,b(i,c,sap.ui.getCore().byId(c.getSelectedItem())));r.openEnd();if(i.getIcon()){r.renderControl(i._getImage());}r.openStart("div");r.class("sapMTSTexts");r.openEnd();r.openStart("div",d+"-addText");r.class(T.CSS_CLASS_TEXT);r.openEnd();this.renderItemText(r,i.getAdditionalText());r.close("div");r.openStart("div",d+"-text");r.class(T.CSS_CLASS_LABEL);r.openEnd();this.renderItemText(r,i.getText());if(m){r.openStart("span",d+"-symbol");r.class(T.CSS_CLASS_MODIFIED_SYMBOL);r.attr("role","presentation");r.attr("aria-hidden","true");r.openEnd();r.close("span");}r.close("div");r.close("div");this.renderItemCloseButton(r,i);r.close("div");};a.renderItemText=function(r,i){if(i.length>T.DISPLAY_TEXT_MAX_LENGTH){r.text(i.slice(0,T.DISPLAY_TEXT_MAX_LENGTH));r.text('...');}else{r.text(i);}};a.renderItemCloseButton=function(r,i){r.openStart("div");r.class("sapMTSItemCloseBtnCnt");r.openEnd();r.renderControl(i.getAggregation("_closeButton"));r.close("div");};a.beginTabStrip=function(r,c){r.openStart("div");r.class("sapMTabStribContainer");r.openEnd();r.openStart("div",c);r.class("sapMTabStrip");r.class("sapContrastPlus");r.openEnd();};a.endTabStrip=function(r){r.close("div");r.close("div");};a.beginTabsContainer=function(r,c){r.openStart("div",c.getId()+"-tabsContainer");r.class("sapMTSTabsContainer");r.openEnd();r.openStart("div",c.getId()+"-tabs");r.class("sapMTSTabs");r.accessibilityState(c,{role:"tablist"});r.openEnd();};a.endTabsContainer=function(r){r.close("div");r.close("div");};a.renderLeftOverflowButtons=function(r,c,f){r.renderControl(c.getAggregation("_leftArrowButton"));if(f){r.flush(c.$("leftOverflowButtons")[0]);}};a.renderRightOverflowButtons=function(r,c,f){r.renderControl(c.getAggregation("_rightArrowButton"));if(f){r.flush(c.$("rightOverflowButtons")[0]);}};a.renderTouchArea=function(r,c){r.openStart("div",c.getId()+"-touchArea");r.class("sapMTSTouchArea");r.openEnd();r.renderControl(c.getAggregation('_select'));r.renderControl(c.getAddButton());r.close("div");};function g(i){return i.getId()+"-label";}function b(i,t,s){var c=t.getItems(),d=c.indexOf(i),o=t.getParent(),A={role:"tab"},e=I.getStaticId("sap.m","TABSTRIP_ITEM_CLOSABLE")+" ";e+=I.getStaticId("sap.m",i.getModified()?"TABSTRIP_ITEM_MODIFIED":"TABSTRIP_ITEM_NOT_MODIFIED");A["describedby"]=e;A["posinset"]=d+1;A["setsize"]=c.length;A["labelledby"]=g(i)+"-addText "+g(i)+"-text";if(o&&o.getRenderer&&o.getRenderer().getContentDomId){A["controls"]=o.getRenderer().getContentDomId(o);}if(s&&s.getId()===i.getId()){A["selected"]="true";}else{A["selected"]="false";}return A;}return a;},true);
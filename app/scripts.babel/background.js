'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onActiveChanged.addListener(function () {
  chrome.tabs.query({
    currentWindow: true, active: true
  }, function(tabs){
    var tabUrl = tabs[0].url;
    var indexString = tabUrl.indexOf('chrome-extension://');

    if (indexString != 0) {
      localStorage.setItem('previewUrl', tabs[0].url);
      var previewUrl = localStorage.getItem('previewUrl');
      console.log(previewUrl);
    }
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('../popup.html')},function(tab) {
 });
});



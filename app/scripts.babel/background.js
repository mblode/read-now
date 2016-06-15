'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('../popup.html')},function(tab) {
 });
});

function queryTabs () {
  chrome.tabs.query({
    currentWindow: true, active: true
  }, function(tabs) {
    var tabUrl = tabs[0].url;
    var substrings = ['chrome-extension://', 'chrome://'];
    if (substrings.some(function(v) { return tabUrl.indexOf(v) >= 0; })) {
    } else {
      localStorage.setItem('previewUrl', tabs[0].url);
      var previewUrl = localStorage.getItem('previewUrl');
      console.log(previewUrl);
    }
  });
}

chrome.tabs.onUpdated.addListener(function () {
  queryTabs();
});

chrome.tabs.onActiveChanged.addListener(function () {
  queryTabs();
});


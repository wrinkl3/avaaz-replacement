browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.indexOf("secure.avaaz.org")>-1) {
    browser.pageAction.show(tab.id);
  }
});
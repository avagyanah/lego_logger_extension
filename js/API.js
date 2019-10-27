chrome.browserAction.onClicked.addListener(onClick);

function onClick(tab) {
  /*
    creates new tab with given URL
  */
  chrome.tabs.create({ url: "https://github.com" });

  /*
    enables/disables extension
  */
  chrome.browserAction.disable();
  chrome.browserAction.enable();

  /*
    enables/disables extension
  */
  chrome.browserAction.setIcon({ path: "icon_enabled.png" });

  /*
    reloads the tab with given id
  */
  chrome.tabs.reload(tab.id);

  /*
    sends message to tab with given id
  */
  chrome.tabs.sendMessage(tab.id, { text: "hello" });
}

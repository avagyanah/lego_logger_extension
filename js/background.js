chrome.browserAction.onClicked.addListener(onClick);

function onClick(tab) {
  switchEnable();
}

function switchEnable() {
  chrome.storage.sync.get(["active"], function({ active }) {
    chrome.storage.sync.set({ active: !active }, () => {});
  });
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ active: true }, () => {});
});

chrome.storage.sync.onChanged.addListener(function({ active }) {
  active.newValue ? enable() : disable();
});

function enable() {
  chrome.browserAction.setIcon({ path: "assets/icon_enabled.png" });
}

function disable() {
  chrome.browserAction.setIcon({ path: "assets/icon_disabled.png" });
}

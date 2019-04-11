console.log('background script loaded');

var openPoddy = () => {
    chrome.tabs.query({url: 'chrome-extension://*/index.html'}, (tabs) => {
        if (tabs.length) {
            chrome.tabs.update(tabs[0].id, {active: true});
            chrome.windows.update(tabs[0].windowId, {focused: true});
        } else {
            window.open('/index.html');
        }
    });
};

chrome.browserAction.onClicked.addListener(() => {
    openPoddy();
});

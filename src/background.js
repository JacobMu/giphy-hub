chrome.tabs.onUpdated.addListener(function(tabId, tabInfo, tab) {
    if (isTabLoaded(tabInfo)) {
        chrome.tabs.sendMessage(tab.id, { isTabLoaded: true });
    }
    chrome.tabs.sendMessage(tab.id, { isTabLoaded: false });
});

function isTabLoaded(tabInfo) {
    return tabInfo.status === 'complete';
}

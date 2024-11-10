chrome.alarms.clearAll().then();

chrome.alarms.create("1m", { delayInMinutes: 1 }).then();
chrome.alarms.create("3m", { delayInMinutes: 1 }).then();
chrome.alarms.create("5m", { delayInMinutes: 1 }).then();

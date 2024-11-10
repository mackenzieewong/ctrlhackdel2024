chrome.webNavigation.onCompleted.addListener(function (page) {
    const url = page.url;
    chrome.alarms.clearAll().then();

    chrome.alarms.create("1m", { delayInMinutes: 1 }).then();
    chrome.alarms.create("3m", { delayInMinutes: 3 }).then();
    chrome.alarms.create("5m", { delayInMinutes: 5 }).then();
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    chrome.tabs.query({ active: true, currentWindow: true },
        function(tabs) {
            chrome.tabs.sendMessage(<number>(tabs[0].id), {time: alarm.name}, function(_){})
        }
    );
    console.log(`${alarm.name} alarm triggered`);
});


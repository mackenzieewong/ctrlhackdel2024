import {sitesList} from "./sitesList";


chrome.webNavigation.onCompleted.addListener(function (page) {
    const url = page.url;

    if((new Set(sitesList)).has(url)) return;

    chrome.alarms.clearAll().then();

    chrome.alarms.create("1m", { delayInMinutes: .5 }).then();
    chrome.alarms.create("3m", { delayInMinutes: 3 }).then();
    chrome.alarms.create("5m", { delayInMinutes: 5 }).then();
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    if(alarm.name === "1m") {
        chrome.windows.create({
            url: sitesList[Math.floor(Math.random() * sitesList.length)],
            type: "popup",
            height: 300,
            width: 400
        }).then();
    }
    chrome.tabs.query({ active: true, currentWindow: true },
        function(tabs) {
            chrome.tabs.sendMessage(<number>(tabs[0].id), {time: alarm.name}, function(_){})
        }
    );
});


import {sitesList} from "./sitesList";


chrome.webNavigation.onCompleted.addListener(async function (page) {
    const url = page.url;

    let tabList = await chrome.tabs.query({ active: true });
    if(tabList[0].url !== url) return
    console.log('1')
    if((new Set(sitesList)).has(url)) return;
    console.log('3')

    await chrome.alarms.clearAll();
    console.log('4')

    let websiteState = "distracting";
    try {
        console.log('before fetch')
        const responseDialogue = await fetch("http://localhost:3000/process-content", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: url }),
        });
        console.log(responseDialogue);
    
        const dataDialogue = await responseDialogue.json();
        console.log(dataDialogue.response);
        let arrayWords = dataDialogue.response.split(" | ");
        websiteState = arrayWords[0];
        let textDialogue = arrayWords[1];
        chrome.tabs.query({ active: true },
            function(tabs) {
                chrome.tabs.sendMessage(<number>(tabs[0].id), {type: "dialogue", response: textDialogue}, function(_){})
            }
        );
    
      } catch (error) {
        console.error("Error sending data to the server:", error);
      }

    if(websiteState === "productive") {
        await chrome.alarms.create("1m", { delayInMinutes: .5 });
        await chrome.alarms.create("3m", { delayInMinutes: 3 });
        await chrome.alarms.create("5m", { delayInMinutes: 5 });    
    }
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
    chrome.tabs.query({ active: true },
        function(tabs) {
            chrome.tabs.sendMessage(<number>(tabs[0].id), {type: "alarm", time: alarm.name}, function(_){})
        }
    );
});


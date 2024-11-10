import $ from 'jquery';

chrome.alarms.onAlarm.addListener(function (alarm) {
    if(alarm.name === "1m") {
        $("p, :header, title").text(function(_, text) {
            return text.replace(/./g, "▮");
        });
        $("p, :header").wrapInner("<mark></mark>");
    }
    console.log(`${alarm.name} alarm triggered`);
});





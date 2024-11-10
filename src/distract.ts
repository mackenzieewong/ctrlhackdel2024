import $ from 'jquery';


chrome.runtime.onMessage.addListener(function(message) {
    if(message.time === "1m") {
        $("p, :header, title").text(function(_, text) {
            return text.replace(/./g, "▮");
        });

        $("p, :header").wrapInner("<mark></mark>");
    }
    console.log(`${message.time} alarm triggered`);
})







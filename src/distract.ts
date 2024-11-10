import $ from 'jquery';
import {addDinoOverlay} from "./dinoOverlay";

const angryDino = "https://i.imgur.com/uXZtDEm.png";
const angrierDino = "https://i.imgur.com/Yv0oae2.png";


chrome.runtime.onMessage.addListener(function(message) {
    if(message.type === "alarm") {
        if(message.time === "1m") {
        }
        if(message.time === "3m") {
            $(".dino").each(function() {
                (<HTMLImageElement>this).src = angryDino;
            });
        }
        if(message.time === "5m") {
            $("p, :header, title").text(function(_, text) {
                return text.replace(/./g, "▮");
            });
    
            $("p, :header").wrapInner("<mark></mark>");
    
            $(".dino").each(function() {
                (<HTMLImageElement>this).src = angrierDino;
            });
        }
        console.log(`${message.time} alarm triggered`);    
    } else if(message.type === "dialogue") {
        $(".dino-text").text(function() {
            return message.response;
        });
    }
});

addDinoOverlay();
console.log("addDinoOverlay function executed");

import $ from 'jquery';
import {addGifsToOverlay} from "./popup";
import {selectedGifUrls} from "./gifsList";
import { addDinoOverlay } from './dinoOverlay';
import { sitesList } from './sitesList';

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
            addGifsToOverlay(selectedGifUrls)
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

if(!(window.opener && window.opener !== window)) {
    addDinoOverlay();
}

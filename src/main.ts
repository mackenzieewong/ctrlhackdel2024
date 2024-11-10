import $ from 'jquery';


const NUMERALS = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

$(() => {
    $(".numeric")[0].addEventListener("keydown", evalNumeric);

    $(".persist").each(function () {
        const isCheckbox = (<HTMLInputElement>this).type === "checkbox";

        chrome.storage.local.get([this.id]).then((result) => {
            if(typeof result[this.id] === "undefined") {
                if(isCheckbox) {
                    (<HTMLInputElement>this).checked = false;
                } else {
                    (<HTMLInputElement>this).value = "";
                }
            } else {
                if(isCheckbox) {
                    (<HTMLInputElement>this).checked = result[this.id];
                } else {
                    (<HTMLInputElement>this).value = result[this.id];
                }
            }
        }, (_) => {
            (<HTMLInputElement>this).value = "";
        });

        if(isCheckbox) {
            this.addEventListener("change", cPersist);
        } else {
            this.addEventListener("input", storePersist);
        }
    });
});

function evalNumeric(this: HTMLElement, event: KeyboardEvent) {
    if(!NUMERALS.has(event.key) && event.key !== "Backspace")
    {
        event.preventDefault();
        event.stopPropagation();
    }
}

function storePersist(this: HTMLInputElement) {
    chrome.storage.local.set({ [this.id]: this.value }).then();
}

function cPersist(this: HTMLInputElement) {
    chrome.storage.local.set({ [this.id]: this.checked }).then();
}

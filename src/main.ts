import $ from 'jquery';


$(() => {
    $(".persist").each(function () {
        const isCheckbox = (<HTMLInputElement>this).type === "checkbox"

            chrome.storage.local.get([this.id]).then((result) => {
            if(typeof result[this.id] === "undefined") {
                if(isCheckbox) {
                    (<HTMLInputElement>this).checked = false;
                } else {
                    (<HTMLInputElement>this).value = "";
                }
            } else {
                if(isCheckbox) {
                    (<HTMLInputElement>this).checked = result[this.id]
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

function storePersist(this: HTMLInputElement) {
    chrome.storage.local.set({ [this.id]: this.value }).then();
}

function cPersist(this: HTMLInputElement) {
    chrome.storage.local.set({ [this.id]: this.checked }).then();
}

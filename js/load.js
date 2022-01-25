if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('serviceworker.js')
        .then(
            () => console.log("service worker registered")
        ).catch(
        err => console.log(err)
    )
}

// install button
let bipEvent = null;
window.addEventListener("BeforeInstallPromptEvent", event => {
    bipEvent = event;
    console.log("BIP");
    document.querySelector("#install").style.display = "block";
});

function install() {
    console.log("trying to install")
    console.log(bipEvent)
    if (bipEvent) bipEvent.prompt("install");
}
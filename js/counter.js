
// install button
let bipEvent = null;
window.addEventListener("BeforeInstallPromptEvent", event => {
    bipEvent = event;
    console.log("BIP");
    document.querySelector("#instalar").style.display = "block";
});

function install() {
    if (bipEvent) bipEvent.prompt();
}
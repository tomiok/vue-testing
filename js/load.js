if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('serviceworker.js')
        .then(
            () => console.log("service worker registered")
        ).catch(
        err => console.log(err)
    )
}
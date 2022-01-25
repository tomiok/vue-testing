const app = Vue.createApp({
    data() {
        return {
            title: "VUEJS counter",
            count: 0
        }
    },
    methods: {
        sum(v, amount) {
            if (v === "positive") {
                this.count += amount
            }
            if (v === "negative") {
                this.count -= amount
            }
        }
    }
})

const mountApp = app.mount("#app")
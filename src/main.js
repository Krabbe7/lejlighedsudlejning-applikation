import { createApp } from "vue"
import App from "./App.vue"
import router from "./router" // Import routeren

const app = createApp(App)
app.use(router) // Brug routeren i app'en
app.mount("#app")

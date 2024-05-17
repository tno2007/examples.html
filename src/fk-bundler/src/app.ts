import { createApp } from "vue";
import { plugin } from "@formkit/vue";
import formkitConfig from "./formkit.config";
import App from "./App.vue";

createApp(App).use(plugin, formkitConfig).mount("#app");

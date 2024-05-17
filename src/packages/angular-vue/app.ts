import "twind/shim";
import angular from "angular";
import '@formkit/themes/dist/genesis/theme.css'
import App from "./App.vue";

import { createApp, ref } from "vue";
import { plugin, defaultConfig } from  "@formkit/vue";

const app = createApp(App);

app.use(plugin, defaultConfig);

app.mount('#app')
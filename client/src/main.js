import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router.js";
import { globals } from "./components/ui/globals.js";

const app = createApp(App);

for(const global of globals) {
  app.component(global.name, global);
}

app.use(router);
app.mount("#root");

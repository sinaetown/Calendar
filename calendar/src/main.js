import { createApp } from "vue";
import App from "./App.vue";
import { state } from "./store.js";

createApp(App)
  .provide("store", state) // providing single global state object to every component in our app.
  .mount("#app");

// import { createApp } from "vue";
// import App from "./App.vue";
// import { state } from "./store.js";

// createApp(App)
//   .provide("store", state) // providing single global state object to every component in our app.
//   .mount("#app");

import { createApp } from "vue";
// import './less/global.less'
import App from "./App.vue";
import { state, dispatch } from "./store.js"; // importing dispatch

createApp(App)
  .provide("store", { state, dispatch }) // providing an object containing global state and function to update/change global state to every component in our app.
  .mount("#app");

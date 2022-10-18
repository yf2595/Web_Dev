import axios from "axios";
axios.defaults.withCredentials = false;
import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";



import routes from "./routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);
Vue.config.devtools = true;
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)
const router = new VueRouter({
  routes,
});
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
const shared_data = {
  username: localStorage.username,

  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    this.username = undefined;
  },
  //server_domain: "http://localhost:3000",
  server_domain: "https://RecipesMaster.cs.bgu.ac.il:443",
};
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
      cuisines: ['',],
      diets: ['',],
      intolerances: ['',]
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  mounted(){
    try {
      const func = async () => {
        const res = await this.axios.get(
        //"http://localhost:3000/recipes/searchParam",
        this.$root.store.server_domain +"/recipes/searchParam");
        res.data[0].map((x)=>this.cuisines.push(x));
        res.data[1].map((x)=>this.diets.push(x));
        res.data[2].map((x)=>this.intolerances.push(x));
      }
      func();      
    }
    catch(err){
        console.log(err.response);
    }
  },
  render: (h) => h(App),
}).$mount("#app");

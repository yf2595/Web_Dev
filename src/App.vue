<template>

  <div id="app">
    <div id="header">
    <img class="logo" src="./assets/rplogo2.png" alt="logo">
    </div>
    <b-navbar class="navi" type="dark">
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'main' }"><b-icon class="icons" icon="house-fill"></b-icon>Home</b-nav-item>
      <b-nav-item :to="{ name: 'search' }"><b-icon class="icons" icon="search"></b-icon>Search</b-nav-item>
      <b-nav-item :to="{ name: 'about' }"><b-icon class="icons" icon="info-circle-fill"></b-icon>About</b-nav-item>

    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
  
      <b-nav-text v-if="!$root.store.username">Hello Guest: </b-nav-text>
      <b-nav-item v-if="!$root.store.username" :to="{ name: 'register' }"><b-icon class="icons" icon="person-plus-fill"></b-icon>Register</b-nav-item>
      <b-nav-item v-if="!$root.store.username" :to="{ name: 'login' }"><b-icon class="icons" icon="person-circle"></b-icon>Login</b-nav-item>
      
      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="My Kitchen" v-if="$root.store.username" right>
        <b-dropdown-item :to="{ name: 'OurFamilyRecipes' }"><b-icon class="icons" icon="newspaper"></b-icon>Family Recipes</b-dropdown-item>
        <b-dropdown-item :to="{ name: 'favorites' }"><b-icon class="icons" icon="star-fill"></b-icon>Favorites</b-dropdown-item>
        <b-dropdown-item :to="{ name: 'myRecipes' }"><b-icon class="icons" icon="list-check"></b-icon>My recipes</b-dropdown-item>
        <b-dropdown-item v-if="$root.store.username" id="show-btn" @click="$bvModal.show('bv-modal-example')">
          <b-icon class="icons" icon="pencil-square"></b-icon>Add new recipe </b-dropdown-item>
          <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title>
              Add Recipe
            </template>
            <div class="d-block text-center">
              <addRecipe></addRecipe>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Cancel</b-button>
          </b-modal>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown :text="$root.store.username" v-if="$root.store.username" right>
        <b-dropdown-item v-on:click="Logout"><b-icon icon="person-circle"></b-icon>
        Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
    <router-view />
  <div class="footer">
  <b-row class="rows">
  <b-col>
    <div class="footer-map">
      <h4 class="map-head">Site Map</h4>
      <ul class="map-ul">
        <li>
          <b-link :to="{ name: 'main'}">Home</b-link>
        </li>
        <li>
          <b-link :to="{ name: 'search'}">Search</b-link>
        </li>
        <li>
          <b-link :to="{ name: 'about'}">About</b-link>
        </li>
        <li v-if="!$root.store.username">
          <b-link :to="{ name: 'register'}">Register</b-link>
        </li>
        <li v-if="!$root.store.username">
          <b-link :to="{ name: 'login'}">Login</b-link>
        </li>
      </ul>
    </div>
    </b-col>
    <b-col>
    <div class="bottom-container">
      <a href="https://www.linkedin.com/in/yuval-felendler">
        <img class="social-media" src="./assets/linkedin.png" alt="LinkedIn">
      </a>

      <a href="https://www.instagram.com/yuvalfelendler/">
      <img class="social-media" src="./assets/instagram.png" alt="Instagram">
      </a>

      <a href="https://www.facebook.com/yuval.felendler">
      <img class="social-media" src="./assets/facebook.png" alt="Facebook">
      </a>
    </div>
    </b-col>
    <b-col>
    <div class="mail-us">
    <div>
      <h6>Want to get updated on some new awesome recipes?</h6>
    </div>
    <div class="input-f">
        <b-form-input type="email" v-model="mail" class="mail-input" placeholder="Enter mail here"></b-form-input>
    </div>
    <div class="input-b">
        <b-button @click="sendMail" variant="warning">Send</b-button>
    </div>
    </div>
    </b-col>
    </b-row>
    <p>&copy; Amit & Yuval<br> Inforamtion and software engeineering <br> web development 2022 -  Assigment 3<br> All Rights Reserved</p>
  </div>  
  </div>
</template>

<script>
import addRecipe from "./components/AddRecipeCompo.vue";
export default {
  name: "App",
  components: {
    addRecipe
  },
  data() {
    return {
      username: this.$root.store.username,
      mail: "",
    };
  },
  methods: {
    async Logout() {
      this.$root.store.logout();
      try{
          const response = await this.axios.post(
          //"http://localhost:3000/auth/Logout",
          this.$root.store.server_domain +"/auth/Logout");
      
      this.$root.toast("Logout", "User logged out successfully", "success");
      sessionStorage.setItem("lastSearch", '');
      this.$router.push("/").catch(()=>{});
      } catch (err) {
        this.$root.toast("Logout failed", "Try later", "danger");
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    sendMail(){
      this.mail="";
      this.$root.toast("Thank you", "Thank you for yours support and trust, we hope you enjoy our recommendation", "success");


    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #92817a;
  background-color: #fffbff;
  min-height: 100vh;
}
#nav {
  padding: 30px;
}
.map-ul{
  list-style-type: none;
}
.input-b{
  float:left;
  margin-top:6px;
  margin-left:5px;
}
.input-f{
  float:left;
  margin-left:20px;
}

.mail-input{
  width:240px;
  margin-top:7px;
  margin-left: 30px;
}

#nav a {
  font-weight: bold;

}
.bottom-container{
  margin-bottom:15px;
}
.icons{
  margin-right:7px;
}
.navi{
  background-color: #362417;
  color: #fffbff;
  font-weight: bold;
}
.footer{
  position: relative;
  bottom: 10px;
  background-color: #362417;
  color: #fffbff; 
  margin-top:30px;
  border: 1px solid #ab47bc;
  padding: 8px;
  width:100%;
  text-align:center;
}

.logo{
  display: block;
  margin: auto;
  height:250px;
  width:250px;
}
.rows{
  margin-top:15px;
}
.social-media{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
}
#header{
  background-image: url("./assets/back.png");
}
.map-head{
  margin-left:40px;
}
</style>
<template>
  <div class="container">
    <div class="title">
    <h1>COOK, EAT, SLEEP & REPEAT</h1>
    </div>
    <div class="middle">
    <div class="divon">
      <RecipePreviewList :key="key" title="Explore this recipes" path="/recipes/random" class="RandomRecipes center" />
      <OurButton :onClick="random" text="Show me more!"></OurButton>
    </div>  

    <div class="divon" v-if="$root.store.username">
        <RecipePreviewList title="Last watched recipes" path="/user/viewed3" class="RandomRecipes center"/>
    </div>

    <div class="divon" v-if="!$root.store.username">
      <LoginPage></LoginPage>
    </div>
  </div>
  <div class="options">
  <b-container class="options-cont">
  <b-row>
    <b-col><img class="logo" src="../assets/chef.png" alt="chef"></b-col>
    <b-col><img class="logo" src="../assets/cook-book.png" alt="book"></b-col>
    <b-col><img class="logo" src="../assets/touch.png" alt="touch"></b-col>
    <b-col><img class="logo" src="../assets/seo.png" alt="seo"></b-col>
  </b-row>
    <b-row>
    <b-col><p>Become a professional chef </p></b-col>
    <b-col>Add your own recipes</b-col>
    <b-col>Save favorite recipes for later</b-col>
    <b-col>Search for the prefect recipe</b-col>
  </b-row>
    <b-row>
    <b-col><p>Explore our many recipes and make some amazing dishes using our step by step recipes, with us its easy to become a chef in one day </p></b-col>
    <b-col>If you are already an amazing chef, let others enjoy your amazing taste and hands by sharing the recipe so everyone can make it</b-col>
    <b-col>Just saw an amazing dish? don`t worry, you can save it in your favorites so you can cook it later</b-col>
    <b-col>Search for a recipe by his ingridiens, name, intoleranc, cuisines and more </b-col>
  </b-row>
</b-container>
<b-container class="menu">
  <b-row>
    <b-col><img class="pic" src="../assets/menu.jpg" alt="seo"></b-col>
    <b-col>
      <h2>
        Why Recipe Master?
      </h2>
      <p>
      <ul>
      <li>Sign up for FREE</li>
      <li>Enjoy over 50000 recipes</li>
      <li>Search for everything you need by one click</li>
      <li>Save the recipes you like so you can cook them whenever you feel it</li>
      <li>Be a part of a large community and share you skills and recipes</li>
      <li>We are good people </li>
      </ul>
      </p>
    </b-col>
  </b-row>
</b-container>

  </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import OurButton from "../components/OurButton";
import LoginPage from "../pages/LoginPage";

export default {
  components: {
    RecipePreviewList,
    LoginPage,
    OurButton,
  },
  data(){
    return{
      key: 0
    };
  },
  methods:{
    random: function() {
    this.key +=1;

  }
  },


};
</script>

<style lang="scss" scoped>
.container{
  text-align:center;
}
.title{
  margin-top:30px;  
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}
.middle {
    width:100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;
}
.divon{
  width:100%;
}

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
.options-cont{
  margin-top:100px;
  margin-bottom:100px;

}
.logo{
  width:128px;
  height:128px;
  margin-bottom: 20px;
}
.pic{
  height:270px;
  width:500px;
}
ul{
  list-style-type: none;
}
</style>

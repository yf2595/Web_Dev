<template>
  <span :class="`${family ? 'family-recipe-preview' : 'recipe-preview'}`" > 
    <router-link v-if="!family" class="recipe-image" :to="{ name: 'recipe', params: { recipeId: recipe.id } }">
      <div class="recipe-body">
        <img  title="Click for full details" v-if="image_load && !isNaN(recipe.id)" :src="recipe.image" class="recipe-image" />
        <img  title="Click for full details" v-if="image_load && isNaN(recipe.id) && family==false" v-bind:src="image" class="recipe-image" />
      </div>
    </router-link>
    <router-link v-if="family" class="family-image" :to="{ name: 'recipeFamily', params: { recipe: recipe } }">
      <div class="family-recipe-body">
        <img  title="Click for full details" v-if="image_load && isNaN(recipe.id) && family==true" v-bind:src="image" class="family-image" />
      </div>
    </router-link>


    <div class="recipe-footer">
      <span v-if="viewed">
        <div :title="recipe.title" class="blue-recipe-title">
          {{ recipe.title }}
        </div>
      </span>
      <span v-else>  
        <div :title="recipe.title" class="recipe-title">
          {{ recipe.title }}
        </div>
      </span>
  


      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.popularity }} likes</li>
      </ul>
      <img v-if="recipe.vegan" v-bind:src="vegen" class="recipe-props" />
      <img v-if="recipe.vegetarian" v-bind:src="vegetarian" class="recipe-props" />
      <img v-if="recipe.glutenFree" v-bind:src="glutenFree" class="recipe-props" />
      <favorite v-if="!isNaN(recipe.id) && this.$root.store.username" :value="fav" :id="recipe.id"></favorite>

    </div>
  </span>
</template>

<script>
import favorite from "./Favorite.vue";
export default {
  components:{
    favorite
  },
  async mounted() {
    try{
      if(isNaN(this.recipe.id)){
        if(this.recipe.id.startsWith("f")){ //family
          this.image = require('../assets/'+this.recipe.image);
          this.image_load = true;
          this.family = true;
        }
        else{ //my recipe (from DB). start with "d"
          this.image_load=true;
          this.image = this.recipe.image;
        }
      }
      else{ //spooncolar
        this.image_load=true;
      }
    if(!isNaN(this.recipe.id) && this.$root.store.username){

      const response_fav = await this.axios.get(
            //"http://localhost:3000/user/favorites"
            this.$root.store.server_domain + "/user/favorites",
      );
      

      response_fav.data.map((fav)=>{
        if(fav.id == this.recipe.id){
          this.fav = true;
        }
      });
    }


    if(this.$root.store.username){
        const response_view = await this.axios.get(
        //"http://localhost:3000/user/viewed"
        this.$root.store.server_domain + "/user/viewed",
      );
      response_view.data.map((view)=>{
        if(view.RecipeID == this.recipe.id){
          this.viewed = true;
        }
      });
    }

    }
    catch (err) {
        console.log(err);
        this.$root.toast("OOPS", "We were unable to fully load the page, please try again", "danger");
    }
  },
  data() {
    return {
      image_load: false,
      fav: false,
      viewed: false, 
      vegen: require('../assets/vegan.png'),
      vegetarian: require('../assets/vegetarian.png'),
      glutenFree: require('../assets/gluten-free.png') ,
      image: "",
      family: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>

.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 400px;
  height: 400px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.family-recipe-preview {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 400px;
  height: 600px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
.recipe-image{
  width:100%;
  height: 200px;
}

.family-image{
  width:100%;
  height: 400px;
}

.recipe-preview > .family-recipe-body {
  width: 100%;
  height: 400px;
  position: relative;
}
.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.blue-recipe-title{
  padding: 10px 10px;
  color: #0000FF;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}
.recipe-props{
  height: 35px;  
  border-radius: 50%;
  width:35px;
  text-align: center;
  margin-left: 12px;
}
.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
</style>

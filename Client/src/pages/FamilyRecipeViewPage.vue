<template>
  <div class="container">


    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <h4>Recipe owner: {{recipe.ownerRecipe}}</h4>
        <!-- <img :src="getImgUrl()" class="center"  /> -->
        <vue-image-slider :images="imageArray" :intervalVal=3000 :height=400 :width=400 />

      </div>
      


      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
          <b-tabs pills card>

            <b-tab title="General Information" active><b-card-text>
            <div>{{recipe.WhenDoWeEat}}</div>
            <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
            <!-- <div>Likes: {{ recipe.aggregateLikes }} likes</div> -->
            <div>Vegetarian: {{ vegetarianRecipe }} </div>
            <div>Vegan: {{ veganRecipe }} </div>
            <div>Gluten Free: {{ glutenFreeRecipe }} </div>
              
            </b-card-text></b-tab>


            <b-tab title="Ingredients"><b-card-text>
              <ul>
                <li
                  v-for="(r, index) in recipe.extendedIngredients"
                  :key="index + '_' + r.id"
                >
                  {{ r.original }}
                </li>
              </ul>
            </b-card-text></b-tab>

            <b-tab title="Instructions"><b-card-text>
              <ol>
                <li v-for="s in recipe.analyzedInstructions" :key="s.number">
                  <b-form-checkbox v-on:change="increment($event)">
                  {{ s.step }}
                </b-form-checkbox>
                </li>
              </ol>
              <round-slider
                class="slider"
                v-model= value
                start-angle="315"
                end-angle="+270"
                line-cap="round"
                radius="120"
                readOnly="true"
                />
              </b-card-text></b-tab>
    </b-tabs>
      </div>
    </div>
  </div>
    </div>
        </div>


</template>

<script>
import VueImageSlider from 'vue-image-slider'
import RoundSlider from 'vue-round-slider'
export default {
  components: {
    RoundSlider,
    VueImageSlider
  },
    data() {
        return {
            recipe: this.$route.params.recipe,
            veganRecipe: false,
            vegetarianRecipe: false,
            glutenFreeRecipe: false,
            image_load: false,
            vegan: require('../assets/vegan.png'),
            vegetarian: require('../assets/vegetarian.png'),
            glutenFree: require('../assets/gluten-free.png'),
            count: 0,
            value:0,
            imageArray: []
            // imageArray: [
            //   'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
            //   'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
            //   'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
            //   'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg'
            // ],
        }
    },
    mounted() {
      this.imageArray.push(require('../assets/'+this.recipe.image));
      if(this.recipe.image1 != "null"){
        this.imageArray.push(require('../assets/'+this.recipe.image1));        
      }
      if(this.recipe.image2 != "null"){
        this.imageArray.push(require('../assets/'+this.recipe.image2));        
      }      
      if(this.recipe.image3 != "null"){
        this.imageArray.push(require('../assets/'+this.recipe.image3));        
      }
      this.veganRecipe = this.recipe.vegan == 0 ? "false" : "true";
      this.vegetarianRecipe = this.recipe.vegetarian == 0 ? "false" : "true";
      this.glutenFreeRecipe = this.recipe.glutenFree == 0 ? "false" : "true";

      

    },
    methods:{
    increment(event){
        const isChecked = event;
        if(isChecked){
            this.count++;
        }else{
            this.count--;
        } 
        this.value = (this.count/this.recipe.analyzedInstructions.length)*100
    },
    getImgUrl(){
      return require('../assets/'+this.recipe.image);
    }
  },

}
</script>

<style scoped>
.slider{
  align:center;
  margin:auto;
}
.wrapped {
  width: 70%;
  align:center;
  margin:auto;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  margin-top: 20px;
  height: 400px;
}
/* .recipe-header{

} */
h1{
  text-align:center;
  margin-bottom:20px;
  font-family: "Times New Roman", Times, serif;
  
}
h4{
  text-align:center;
  margin-bottom:15px;
  font-family: "Times New Roman", Times, serif;
  
}

.recipe-body{
  margin:auto;
  align:center;
}
.container{
  align:center;
}
.recipe-props{
  height: 35px;  
  border-radius: 50%;
  width:35px;
  text-align: center;
  margin-left: 12px;
}
</style>

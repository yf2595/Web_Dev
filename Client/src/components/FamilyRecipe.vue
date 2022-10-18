<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <h4>Owner Recipe: {{recipe.ownerRecipe}}</h4>
        <img :src="getImgUrl()" width="300" height="500" />
      </div>
      <div>
        <img v-if="recipe.vegan" v-bind:src="vegan" class="recipe-props" />
        <img v-if="recipe.vegetarian" v-bind:src="vegetarian" class="recipe-props" />
        <img v-if="recipe.glutenFree" v-bind:src="glutenFree" class="recipe-props" />
      </div>

      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
          <b-tabs pills card>

            <b-tab title="General Information" active><b-card-text>
            <div>{{recipe.WhenDoWeEat}}</div>
            <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
            <div>Likes: {{ recipe.aggregateLikes }} likes</div>
            <div>Vegetarian: {{ recipe.vegetarian }} </div>
            <div>Vegan: {{ recipe.vegan }} </div>
            <div>Gluten Free: {{ recipe.glutenFree }} </div>
              
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
import RoundSlider from 'vue-round-slider'
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  components: {
    RoundSlider,
  },
  async mounted() {
  },
    data() {
        return {
            image_load: false,
            vegan: require('../assets/vegan.png'),
            vegetarian: require('../assets/vegetarian.png'),
            glutenFree: require('../assets/gluten-free.png'),
            count: 0,
            value:0,
        }
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
  width: 70%;
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
img{
  margin-bottom:20px;
  align-items: center;
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

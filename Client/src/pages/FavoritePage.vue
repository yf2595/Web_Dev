<template>
  <div class="container">
    <div class="divon">
      <RecipePreviewList :key="key" title="My favorite recipes" path="/user/favorites" class="RandomRecipes center" />
    </div>  
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";

export default {
  components: {
    RecipePreviewList,
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

.title{
  margin: auto;
}
.middle {
    width:100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
.divon{
  width:70%;
}



.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}


</style>

<template>
    <div class="container">
        <RecipePreviewList :key="key" title="Family recipes" path="/user/myFamilyRecipes" class="FamilyRecipe center" />

    </div>

</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
    name: "OurFamilyRecipes",
    components: {
        RecipePreviewList
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
.FamilyRecipes {
  margin: auto;
  align-content: center;
}
</style>
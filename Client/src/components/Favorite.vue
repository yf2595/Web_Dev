<template>
    <div class="favoriting">
        <label class="favorite__heart" v-bind:class="{'favorite__heart__selected': value, 'is-disabled': disabled}"
                v-on:click="favorite">
            ❤
        </label>
    </div>
</template>


<script>
export default{
    data: function() {
        return {
            disabled: false
         };
    },
    props: {
        id:{
            type:Number,
            required: true,
        },
        value:{
            type:Boolean,
            required: true
        }
    },
    methods: {
        favorite: function() {
            if (this.disabled==true) {
                return;
            }
            if(!this.value){
                this.value = !this.value;
                this.addToFav();
            }


        },
        addToFav: async function(){
            try {
                const response = await this.axios.post(
                //"http://localhost:3000/user/favoritesPost",
                this.$root.store.server_domain +"/user/favoritesPost",

            {
                recipeId: this.id,
            }
            );
        } catch (err) {
            console.log(err.response);
            this.$root.toast("OOPS", "We were unable to save your favorite recipe, please try again", "danger");
        }
            }
    }
};
        
</script>

<style>
    .favoriting{
        display: inline-block
    }
    .favorite__heart {
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        font-size: 40px;
        margin-left: 12px;
        margin-top: 6px;
        color: #ABABAB;
        cursor: pointer;
        -webkit-transition: color .2s ease-out;
        transition: color .2s ease-out;
    }
    .favorite__heart.is-disabled:hover {
        cursor: default;
    }
    .favorite__checkbox {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 10px;
        width: 10px;
        margin: -1px;
        padding: 0;
        border: 0;
    }
    .favorite__heart__selected{
        color: #df200b;
    }
</style>
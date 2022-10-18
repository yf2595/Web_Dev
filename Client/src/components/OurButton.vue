<template>
    <div>
        <button v-on:click="onClick" class="button">
            {{ text }}
        </button>
    </div>
</template>

<script>
export default {
  name: "OurButton",
  props: {
    text: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  } 
};
</script>

<style >
.button {
  display: inline-block;
  padding: 10px 10px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #92817a;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #999;
}

.button:hover {
  background-color: #854d27
  }

.button:active {
  background-color: #854d27;
  box-shadow: 0 3px #666;
  transform: translateY(4px);
}
</style>

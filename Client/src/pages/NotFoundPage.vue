<template>
<div class="mainbox">
    <div class="err">4</div>
    <img class="pizza" src="../assets/pizza.png">
    <div class="err2">4</div>
    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? <p>Let's go <router-link class="a" to="/" exact>Home</router-link> and try from there.</p></div>
</div>
</template>

<style>
.mainbox {
  background-color: #D2B48C;
  margin: auto;
  height: 800px;
  width: 100%;
  position: relative;
}


.err {
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 35%;
    top: 8%;
}

.pizza{
  width: 130px;
  height: 130px;
  position:absolute;
  left: 45%;
  top: 17%;
}

 .err2 {
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 58%;
    top: 8%;
  }

.msg {
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.6rem;
    position:absolute;
    left: 16%;
    top: 45%;
    width: 75%;
    color:#8B4513;
  }

.a {
  text-decoration: none;
  color: white;
}

.a:hover {
  text-decoration: underline;
}
</style>
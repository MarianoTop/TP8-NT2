<template>
  <div class="container-fluid">
    <div class="jumbotron">
       <h1>TP8-NT2-Toppino Mariano</h1>

       <br>
       <Navbar/>
       <router-view></router-view>

 
    </div>
  </div>
</template>

<script>


import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
  
 
   Navbar
  }
}
</script>

<style>
h1 {
 
  color: blue;
 }
</style>

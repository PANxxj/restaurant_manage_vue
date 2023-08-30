<template>
  <router-view/>
  <SignUp/>
</template>

<script>

import SignUp from './components/SignUp.vue'
// import router from './router';
export default {
  name: 'App',
  components:{
    SignUp,
    // router
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

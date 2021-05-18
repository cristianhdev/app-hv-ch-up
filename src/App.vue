<template>
  <div id="app">
    <menu-principal/>
    <!-- <transition  name="animate__animated animate__fadeInDown"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"> -->
    <router-view/>
 <!--    </transition> -->
  </div>
</template>

<script>
import MenuPrincipal from './components/menuPrincipalComponent'
export default {
  components:{
    MenuPrincipal
  } 
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter, .fade-leave-to  {
  opacity: 0.5;
  background-color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template lang="html">
  <section class="menu-principal-component">
    <b-navbar toggleable="md"  id="nav-bar-top" type="dark" fixed="top" :style="{'background-color':colorMenu}">
    <b-navbar-brand to="/">
    <img src="@/assets/logo.png" id="logo" class=" align-center" alt="CHDEV" style="
    width: 55px;
">
    <!-- <span id="texto-logo">CristianHDev</span> -->
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
    

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/sobre_mi" exact>Sobre mi</b-nav-item>
         <b-nav-item to="/portafolio">Portafolio</b-nav-item>
         <b-nav-item to="/experiencia">Experiencia</b-nav-item>
        <b-nav-item to="/estudios">Estudios</b-nav-item>
        <b-nav-item to="/contacto">Contactame</b-nav-item>
       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'menu-principal-component',
    props: [],
    mounted () {

    },
    data () {
      return {
        colorMenu:'#495762'
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >

</style>

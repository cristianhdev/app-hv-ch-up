<template lang="html">
  <section class="menu-principal-component">
    <b-navbar toggleable="lg" class="fixed-top" type="dark" :style="{'background-color':colorMenu}">
    <b-navbar-brand to="/">CrisitianDev</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
    

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/sobre_mi" exact>Sobre mi</b-nav-item>
         <b-nav-item to="/portafolio">Portafolio</b-nav-item>
         <b-nav-item to="/experiencia">Experiencia</b-nav-item>
        <b-nav-item to="/estudios">Estudios</b-nav-item>
        <b-nav-item href="/contacto">Contactame</b-nav-item>
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar..."></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form> -->

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
.menu-principal-component {
}
</style>

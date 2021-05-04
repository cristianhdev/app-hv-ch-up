<template lang="html">
  <section class="menu-principal-component">
    <b-navbar toggleable="lg" class="fixed-top" type="dark" :style="{'background-color':colorMenu}">
    <b-navbar-brand to="/">CrisitianDev</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
    

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/sobre_mi">Sobre mi</b-nav-item>
        <b-nav-item to="/estudios">Estudios</b-nav-item>
        <b-nav-item to="/experiencia">Experiencia</b-nav-item>
        <b-nav-item to="/portafolio">Portafolio</b-nav-item>
        <b-nav-item href="#">Contactame</b-nav-item>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar..."></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown right>-->
          <!-- Using 'button-content' slot -->
          <!--<template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
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

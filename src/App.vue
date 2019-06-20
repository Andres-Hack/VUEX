<template>
  <div id="app">
    <b-jumbotron header="BootstrapVue" :lead="nombre+' '+apellido" class="text-uppercase">
      <b-button variant="primary" href="#">More Info</b-button>
      <hr>
      <TareasRestantes></TareasRestantes>
    </b-jumbotron>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TareasRestantes from './components/TareasRestantes'

export default {
  name: "App",
  // PRIMERA FORMA
  // computed: {
  //   nombres() {
  //     return this.$store.state.nombre+' '+this.$store.state.apellido;
  //   }
  // }
  // SEGUNDA FORMA
  // computed: mapState({
  //   nombre: state => state.nombre+' '+state.apellido
  // }),
  // LA MEJOR FORMA
  components:{
    TareasRestantes
  },
  computed: {
    ...mapState([ 'nombre', 'apellido']),
  },
};
</script>

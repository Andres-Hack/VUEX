<template>
  <div class="row">
    <div class="col-6">
      <div class="hello">
        <h3 class="font-italic">
          Viene de la ciudad de :
          <span class="text-danger">{{ciudad}}</span>
        </h3>
        <h3 class="font-italic">
          Con profesion de :
          <span class="text-primary">{{profesion}}</span>
        </h3>
        <b-list-group>
          <b-list-group-item v-for="tarea of tareas" :key="tarea.id">{{ tarea.nombre }}</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="col-6">
      <Contador />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Contador from './Contador'

export default {
  name: "HelloWorld",
  components:{
    Contador
  },
  computed: {
    ...mapState(["ciudad", "profesion", "tareas"])
  }
  // computed: {
  //   ciudad() {
  //     return this.$store.state.ciudad;
  //   },
  //   profesion() {
  //     return this.$store.state.profesion;
  //   },
  //   tareas() {
  //     return this.$store.state.tareas;
  //   }
  // }
};
</script>


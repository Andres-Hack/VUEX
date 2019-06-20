<template>
  <div>
    <div class="row mb-3">
      <div class="col-8">
        <h5>Cantidad : {{cantidad}}</h5>
      </div>
      <div class="col-4">
        <button class="btn btn-success btn-sm" @click="incremetar">+</button>
        <button class="btn btn-danger btn-sm" @click="restar">-</button>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-8">
        <input type="number" v-model="num1">
      </div>
      <div class="col-4">
        <button class="btn btn-success btn-sm" @click="sumar(num1)">+ {{num1}}</button>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-8">
        <h5>Ingrementar Async</h5>
      </div>
      <div class="col-4">
        <button class="btn btn-info btn-sm" @click="incremetarAsync">+</button>
        <button class="btn btn-warning btn-sm" @click="restarAsync">-</button>
      </div>
    </div>
    <b-progress :value="cantidad" :max="max" :variant="color" show-value class="mb-3"></b-progress>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "contador",
  data() {
    return {
      max: 50,
      num1: 0
    };
  },
  computed: {
    ...mapState(["cantidad"]),
    color() {
      return this.cantidad >= 20 ? "success" : "danger";
    }
  },
  methods: {
    ...mapMutations(["incremetar", "restar"]),
    ...mapActions(["incremetarAsync", "restarAsync"]),
    sumar(n) {
      this.$store.commit("sumar", parseInt(n));
    }
  }
  // methods:{
  //     aumetar(){
  //         this.$store.commit('incremetar');
  //     },
  //     disminuir(){
  //         this.$store.commit('restar');
  //     }
  // }
};
</script>

<style>
</style>

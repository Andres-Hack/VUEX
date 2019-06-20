<template>
    <h2>{{ tareasCompletados }} --> numero de tareas completadas</h2>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'tareasRestantes',
    // computed: {
    //     tareasCompetadas(){
    //         // return this.$store.state.tareas.filter((tarea) => {
    //         //     return tarea.completado;
    //         // }).length;
    //         return this.$store.getters.tareasCompletados;
    //     }
    // },
    computed: {
        ...mapGetters(['tareasCompletados']),
    },
}
</script>

<style>

</style>

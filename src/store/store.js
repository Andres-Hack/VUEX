import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        nombre: 'Andres Richard',
        apellido: 'Mamani Perez',
        profesion: 'Developer',
        ciudad: 'La Paz',
        tareas: [
            { nombre: 'Aprender Vue Routing', completado: true },
            { nombre: 'Organizar lecciones restantes', completado: false },
            { nombre: 'Grabar lecciones minimo curso ES6', completado: false },
            { nombre: 'Preparar Loadeing Page curso', completado: false },
            { nombre: 'Diseñar accione de marketing', completado: false },
        ],
        cantidad: 0,
    },
    getters: {
        tareasCompletados: (state) => {
            return state.tareas.filter((tarea) => tarea.completado).length;
        }
    },
    mutations: {
        incremetar: (state) => state.cantidad++,
        restar: (state) => state.cantidad--,
        sumar: (state, n) => state.cantidad += n,
    },
    actions:{
        incremetarAsync: (context) => {
            setTimeout(() => context.commit('incremetar'), 3000)
        },
        restarAsync: (context) => {
            setTimeout(() => context.commit('restar'), 3000)
        }
    }
});
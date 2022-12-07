import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
let url= "https://6366a10cf5f549f052ca15a9.mockapi.io/datosTP7/"


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        datos: []
    },
    actions: {
        async  getUsuarios({commit}) {
            console.warn('actions -> getUsuarios', new Date().toLocaleString())
            try {
                let response = await axios(url);
                let respuesta = response.data;
                console.log(respuesta);
              
                commit('modificarUsuarios', respuesta)
                
              } catch (error) {
                console.error(error);
              }               
        },
        async  agregarUsuario({commit}, formData) {

            console.warn('actions -> agregarUsuario', new Date().toLocaleString())

            try {
                console.log("URL: " + url)
                console.log("Usuario: " + formData)
                formData.edad = parseInt(formData.edad)
                let response = await axios.post(url, formData, { 'content-type' : 'application/json' })
                console.log(response)
                commit('agregarUsuario', response)
              }
              catch(error) {
                 console.error('ERROR en agregarUsuario', error)
              }           
        },
        
    },
    mutations: {
        modificarUsuarios(state, datosMock) {
            console.warn('mutations -> modificarUsuarios', state, datosMock, new Date().toLocaleString())
            state.datos = datosMock
        },
        agregarUsuario(state, datosMock) {
            console.warn('mutations -> agregarUsuario', state, datosMock, new Date().toLocaleString())
            state.datos.push(datosMock) 
        },
     
    }
})
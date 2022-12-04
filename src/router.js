import Vue from 'vue'
import VueRouter from 'vue-router'



import Consulta from './componentes/Consulta.vue'
import Formulario from './componentes/Formulario.vue'

Vue.use(VueRouter)

export const router = new VueRouter({

    mode:'history',
    routes:[
        {path: '/',redirect: '/consulta'},
        {path: '/consulta',component:Consulta},
        {path: '/formulario',component:Formulario}
    ]

})
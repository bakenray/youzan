import Vue from 'vue'
import './member.css'
import Foot from 'components/Foot'
import router from './router'
import store from './vuex'

new Vue({
    el:'#app',
    router,
    store,
    components:{
        Foot,
    }
})


import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import Foot from 'components/Foot'
import qs from 'qs'
import mixin from 'js/mixin.js'
import Velocity from 'velocity-animate'

let {keyword,id} = qs.parse(location.search.substr(1))

new Vue({
    el:'.container',
    data:{
        searchList:null,
        keyword:null,
        isShow:false,
        searchContent:false,
    },
    // components:{
    //     Foot
    // },
    created(){
        this. getSearchList()
    },
    methods:{
        getSearchList(){
            axios.get(url.searchList,{keyword,id}).then(res =>{
                this.searchList = res.data.lists
                
            })
        },
        move(){
            if(document.documentElement.scrollTop > 100){
                this.isShow = true
            }
            else{
                this.isShow = false
            }
        },
        toTop(){
            Velocity(document.body,'scroll',{duration:600})
        },
        selectContent(){
            this.searchContent = !this.searchContent
        }
    },
    mixins:[mixin]
}) 
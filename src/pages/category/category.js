import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import Foot from 'components/Foot'

Vue.prototype.$axios = axios

new Vue({
    el:'#app',
    data:{
        topLists:null,
        topIndex:0,
        subData:null,
        rankData:null
    },
    created(){
        this.getTopList()
        this.getSubList(0)
    },
    methods:{
        getTopList(){
            this.$axios.get(url.topList).then(res =>{
                this.topLists = res.data.lists
            })
        },
        getSubList(index,id){
            this.topIndex=index
            if(index ==0){
                this.getRank()
            }
            else{
                this.$axios.get(url.subList,{id}).then(res =>{
                    this.subData = res.data.data
                    
                })
            }
        },
        getRank(){
            this.$axios.get(url.rank).then(res =>{
                this.rankData = res.data.data
                console.log(this.rankData)
            })
        },
        toSearch(list){
            location.href=`search.html?keyword=${list.name}&id=${list.id}`
        }
    },
    components:{
        Foot
    },
    mixins:[mixin]
    
    // 过滤价格，添加小数后两位
    // filters:{
    //     filterNumber(price){
    //         var value = Math.round(parseFloat(price)*100)/100
    //         var vLength = value.toString().split('.')
    //         if(vLength.length==1){
    //             value = value.toString() + '.00'
    //         }
    //         else if(vLength.length>1){
    //             if(vLength[1].length<2){
    //                 value =value.toString() +'0'
    //             }
    //         }
    //         return value
    //     }
    // }
})
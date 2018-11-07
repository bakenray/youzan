import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_transition.css'


import Vue from 'vue'
import url from 'js/api.js'
import axios from 'axios'
import mixin from 'js/mixin.js'
import qs from 'qs'

import Swiper from 'components/Swiper'

let {id} = qs.parse(location.search.substr(1))
let detailTab =['商品详情','本店成交']

new Vue({
    el:'#app',
    data:{
        id,
        details:null,
        detailTab,
        dealList:null,
        tabIndex:0,
        bannerLists:null,
        skuType:1,
        showSku:false,
        skuNum:1,
        isAddCart:false,
        showAddMessage:false,
        loading:false,
    },
    created(){
        this.getDetails()
        // this. getDeal()
    },
    methods:{
        getDetails(){
           this.loading=true
           axios.get(url.details,{id}).then(res =>{
                this.details = res.data.data
                this.bannerLists=[]
                this.details.imgs.forEach(item=>{
                    this.bannerLists.push({
                        clickUrl:'',
                        img:item
                    })
                })
                
            })
        },
        getDeal(){
            this.loading=true
            axios.get(url.deal,{id}).then(res=>{
                this.dealList=res.data.data.lists
                this.loading=false
            })
        },
        changeTab(index){
           this.tabIndex= index
           if(index){
                this. getDeal()
           }
        },
        chooseSku(type){
            this.skuType = type
            this.showSku = true
        },
        changeSkuNum(num){
            if(num<0 &&this.skuNum===1) return
            this.skuNum +=num
        },
        addCart(){
            axios.get(url.addCart,{id,number:this.skuNum}).then(res=>{
                if(res.data.status ===200){
                    this.showSku =false
                    this.isAddCart=true
                    this.showAddMessage=true
                    setTimeout(()=>{
                        this.showAddMessage=false
                    },1000)
                }
            })
        }
    },
    components:{
        Swiper
    },
    watch:{
        showSku(val,oldVal){
            document.body.style.overflow = val? 'hidden':'auto'
            document.querySelector('html').style.overflow = val? 'hidden':'auto'
            document.body.style.height = val? '100%':'auto'
            document.querySelector('html').style.height = val? '100%':'auto'
        }
    },
    mixins:[mixin]

})
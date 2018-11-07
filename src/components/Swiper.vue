<template>
     <div class="swiper-container">
       <div class="swiper-wrapper">
         <div class="swp-page swiper-slide" v-for="list in lists" :key="list.id" >
           <a class="js-no-follow" href="#"> 
               <!-- :href="list.clickUrl" -->
             <img class="goods-main-photo fadeIn" :src="list.img">
           </a>
         </div>
       </div>
       <div class="swiper-pagination"></div>
     </div>
</template>

<script>
import swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:'swiper',
    props:{
        name:{},
        lists:{
            type:Array,
            required:true
        }
    },
    mounted(){
        new swiper('.swiper-container',{
            loop:true,
            autoplay:{
                stopOnLastSlide:true
            },
            pagination:{el:'.swiper-pagination',type: 'bullets',}
        })
    }
}
</script>

<style scoped>
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-container img{
    width:100%;
}
.swiper-pagination{
    text-align: center;
}
</style>

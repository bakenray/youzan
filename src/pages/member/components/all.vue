<template>
 <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block" v-if="lists&&lists.length">

      <a class="block-item js-address-item address-item " 
      @click="toEdit(list)" 
      v-for="list in lists" 
      :key="list.id"
      :class="{'address-item-default':list.isDefault}"
      >
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.districtName}}{{list.address}}</p>
        <a class="address-edit">修改</a>

      </a>

    </div>

    <div v-if="lists&&!lists.length" style="  text-align: center; padding: 20px 0;">
        还未添加地址，请先添加地址
    </div>

    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" 
      :to="{name:'form',query:{type:'add'}}">
            新增地址
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        lists(){
            return this.$store.state.lists
        }
    },
    created(){
        if(!this.lists){
            this.$store.dispatch('getLists')
        }
       
    },
    methods:{
        toEdit(list){
            this.$router.push({name:'form',query:{type:'edit',instance:list}})
        }
    }
}
</script>

<style scoped>
  @import './address_base.css';
  @import './address.css';
</style>
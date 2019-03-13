<template>
    <div class="main"> 
        <form action="setResult">
            <div class="search-input">
            <input type="text" v-model="searchval" @input="setResult" placeholder="请输入搜索内容">
            <i v-if="searchval==''" class="iconfont icon-search"></i>
            <i v-if="searchval!=''" class="iconfont icon-delete" @click="searchval=''"></i>
        </div> 
        </form>
        
        <hr class="split-line">
        <div class="search-list">
            <div class="s-row" v-for="(item,index) in showList" :key="index">{{item}}</div>
        </div>
    </div>    
</template>

<script>
export default {
    name :'searchlist',
    props:{
        dataArr:{
            type:Array,
            default : ()=>{ return [] },
        },

    },
    data() {
        return {
            searchval:'',
            showList:[],
        }
    },

    created() {
        
    },

    mounted() {

    },
    
    methods: {
        setResult(){
            console.log("dataArr");
            this.showList = [];
            var self = this;
            if(self.searchval!='' && this.dataArr.length> 0){
                this.showList = this.dataArr.map(function(value,index,arr){
                   if(value.indexOf(self.searchval)>-1){
                        return value;
                   }
                })

            }
        }
        
    },

}
</script>
<style  lang="scss">
@import url('//at.alicdn.com/t/font_358840_qm3fm2hziua.css');
   .main{
       width: 100%;
   }
    .split-line{
        background: #efefef;
        border: 0;
        height: 0.5px;
        width: 90%
    }

    .search-input{
        padding:10px 20px;
        padding-bottom: 0;
        display: flex;
        justify-items: center;
        line-height: 24px;

        input{
            width: 100%;
            height: 24px;
            border: 0;
            &::placeholder{
                color: #aaaaaa;
            }
        }

        
    }

    .search-list{
     
        .s-row{
            height: 30px;
            
        }
    }





</style>


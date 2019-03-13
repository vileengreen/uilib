<template>
    <div class="main">  
        <div class="row">用户名：<input type="text" name="username" placeholder="请输入用户名" v-model="username"></div>
        <div class="row">密&nbsp;&nbsp; &nbsp;码：<input type="password" name="pwd" placeholder="请输入用户名称" v-model="pwd"></div>

        <div class="row main-bg">登陆</div>
        
    </div>    
</template>

<script>
export default {
    name :'login',
    data() {
        return {
            username:'',
            pwd:'',
        
        }
    },

    created() {
        
    },

    mounted() {
        
    },
    
    methods: {
        
    },

}
</script>
<style  lang="scss">
    $borderRadius:4px;
    *{
        outline: none;
    }

    .main{
        width: 100%;
        color: #6c6c6c;
    }

    .row{
        margin: 20px;
        height: 30px;
        line-height: 30px;
        input{
            height: 30px;
            border: .5px solid #eeeeee;
            padding-left: 10px;
            border-radius: $borderRadius;
            &::placeholder{
                color:#cccccc;
            }
        }
    }

    .main-bg{
        color:#ffffff;
        background: #f0ad4e;
        border: #eea236;
        padding: 6px;
        border-radius:$borderRadius; 
    }
    
</style>


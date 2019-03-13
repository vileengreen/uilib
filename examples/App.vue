<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <login></login> -->
    <searchlist :dataArr="dataArr"></searchlist>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
       dataArr:[
        '测试查询列表1',
        '测试查询列表2',
        '测试查询列表3',
        '测试查询列表4',
        '测试查询列表5',
        '测试查询列表6',
        '测试查询列表7',
        '测试查询列表10',
        '测试查询列表9',
        '测试查询列表8',
        '测试查询列表11',
      ]
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

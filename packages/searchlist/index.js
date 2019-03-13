import searchlist from './src/index.vue';

searchlist.install = function(Vue){
    Vue.component(searchlist.name,searchlist)
}

export default searchlist;
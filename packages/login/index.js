import login from './src/index.vue';

login.install = function(Vue){
    Vue.component(login.name,login)
}

export default login;
import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import Cookies from 'js-cookie';


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);

Vue.use(Util.$http);

const store = new Vuex.Store({
    state: {
        userinfo: {
            username: '',
            company: '',
            permission: '',
            pages: '',
            token: '',
            operateAuth: 'A'
        }
    },
    getters: {
        
    },
    mutations: {
        setToken({userinfo}, payload){
            userinfo.token = payload.token;
        },
        setUserInfo({userinfo}, payload){
            userinfo.username = payload.username;
            userinfo.company = payload.company;
            userinfo.permission = payload.permission;
            userinfo.pages = payload.pages;
        },
        setOperateAuth({userinfo}, payload){
            userinfo.operateAuth = payload.operateAuth;
        }
    },
    actions: {
        // 设置token cookie与store
        setToken({commit}, payload){
            const SYSAUTH = Cookies.get('SYSAUTH');
            if(SYSAUTH){
                Cookies.remove('SYSAUTH');
            }
            Cookies.set('SYSAUTH', payload.token, {expires: 1});
            commit('setToken', payload);
        },
        // 移出token 
        removeToken({commit}){
            const SYSAUTH = Cookies.get('SYSAUTH');
            if(SYSAUTH){
                Cookies.remove('SYSAUTH');
            }
            commit('setToken', {token: ''});
        },
        // 设置用户其他信息
        setUserInfo({commit}, payload){
            const payloadString = JSON.stringify(payload);
            localStorage.setItem('SYSU', payloadString);
            localStorage.setItem('SYSL', payloadString.length);
            commit('setUserInfo', payload);
        },
        // 设置用户对于当前组件按钮的操作权限
        setOperateAuth({commit}, payload){
            commit('setOperateAuth', payload);
        }
    }
});

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    return next();
    /* 判断是否有认证token */
    const SYSAUTH = Cookies.get('SYSAUTH');
    let isResolve = false;
    if(store.state.userinfo.token.length === 0){
        if(SYSAUTH){
            let userInfo = null;
            let userInfoLength = 0;
            try{
                userInfo = JSON.parse(localStorage.getItem('SYSU'));
                userInfoLength = parseInt(localStorage.getItem('SYSL'));
                if(userInfo === '' || userInfoLength === 0){
                    throw new Error('USER_NULL');
                }
            }catch(error){
                Cookies.remove('SYSAUTH');
                localStorage.removeItem('SYSU');
                localStorage.removeItem('SYSL');
                localStorage.removeItem('LAST');
                if(to.path !== '/'){
                    isResolve = true;
                    next('/');
                }
            }
            if(userInfo){
                store.dispatch('setToken', {token: SYSAUTH});
                store.dispatch('setUserInfo', userInfo);
                if(to.path === '/'){
                    isResolve = true;
                    let lastPath = localStorage.getItem('LAST');
                    if(lastPath){
                        next(lastPath);
                    }else{
                        Cookies.remove('SYSAUTH');
                        next('/');
                    }
                }
            }
        }else{
            if(to.path !== '/'){
                isResolve = true;
                next('/');
            }
        }
    }else{
        if(SYSAUTH){
            if(to.path === '/'){
                isResolve = true;
                next(false);
            }
        }else{
            if(to.path !== '/'){
                isResolve = true;
                next('/');
            }
        }
    }
    if(isResolve){
        iView.LoadingBar.finish();
        return;
    }
    /* token认证通过时判断页面访问权限 */
    const toPageAuthRegExp = new RegExp(to.meta.auth);
    const pages = store.state.userinfo.pages;
    if(to.path !== '/' && !toPageAuthRegExp.test(pages)){
        iView.LoadingBar.finish();
        return next(false);
    }
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from) => {
    if(to.path === '/'){
        Cookies.remove('SYSAUTH');
        localStorage.removeItem('SYSU');
        localStorage.removeItem('SYSL');
        localStorage.removeItem('LAST');
    }else if(to.path !== '/404'){
        localStorage.setItem('LAST', to.path);
    }
    const matches = store.state.userinfo.pages.match(new RegExp('([A-Z])'+to.meta.auth));
    matches && store.dispatch('setOperateAuth', {operateAuth: matches[1]});
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
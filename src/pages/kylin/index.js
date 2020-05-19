import { Page } from '../../Page'
import IndexView from './views/main.vue';
import store from './store'
import router from './router'
class MypagePage extends Page {
  render() {   //直接渲染页面
    return IndexView;
  }
  // router() {    //通过路由跳转
  //   return router;
  // }
  store() {
    return store
  }
}
new MypagePage('#app');

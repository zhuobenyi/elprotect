import {
  Page
} from '../../Page'
import IndexView from './views/home.vue'
import store from './store'
import router from './router'
class MypagePage extends Page {
  render () {
    return IndexView
  }
  // router() {
  //   return router;
  // }
  store () {
    return store
  }
}
new MypagePage('#app')

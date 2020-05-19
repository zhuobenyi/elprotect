import Vue from 'vue'
import * as FastClick from 'fastclick'
import './styles/global.css'
require('./mock.js')
Vue.config.productionTip = false
FastClick.attach(document.body)

// import Component from 'vue-class-component'
// @Component({
//   template: `<div id="app"><router-view /></div>`
// })
// export default class App extends Vue {}

export class Page {
  constructor(name) {
    // Vue.component('App', {
    //   template: `<div id="app"><router-view /></div>`,
    //   render: () => {
    //     return <App />;
    //   }
    // })

    let _this_ = this;
    var _router_ = _this_.router();
    var _store_ = _this_.store();
    var IndexView = _this_.render();
    if(_router_!=undefined && _store_!=undefined){
      var App = Vue.extend({
        template: `<div id="app"><router-view /></div>`
      })
      Vue.component('App', App)
      return new Vue({
        el: name,
        router:_router_,
        store:_store_,
        // components: { App },
        // template: '<App/>',
        render: function (h) {
          return <App></App>;
        }
      })
    }else if(_router_!=undefined && _store_==undefined){
      var App = Vue.extend({
        template: `<div id="app"><router-view /></div>`
      })
      Vue.component('App', App)
      return new Vue({
        el: name,
        router:_router_,
        // components: { App },
        // template: '<App/>',
        render: function (h) {
          return <App></App>;
        }
      })
    }else if(_router_==undefined && _store_!=undefined && IndexView!=undefined){
      var App = Vue.extend({
        template: `<div id="app"><IndexView/></div>`
      })
      Vue.component('App', App)
      Vue.component('IndexView', IndexView)
      return new Vue({
        el: name,
        store:_store_,
        // components: { App },
        // template: '<App/>',
        render: function (h) {
          return <App></App>;
        }
      })
    }else if(_router_==undefined && _store_==undefined && IndexView!=undefined){
      var App = Vue.extend({
        template: `<div id="app"><IndexView/></div>`
      })
      Vue.component('App', App)
      Vue.component('IndexView', IndexView)
      return new Vue({
        el: name,
        // components: { App },
        // template: '<App/>',
        render: function (h) {
          return <App></App>;
        }
      })
    }
  }
  render() { return undefined; }
  router() { return undefined; }
  store() { return undefined; }
}

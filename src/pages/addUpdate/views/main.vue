<template>
  <div>
    <md-result-page-all :transportFlag="4" :transpotTips="transpotTips"></md-result-page-all>
  </div>
</template>

<style type="stylus" scoped>
</style>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Button from '@mandmobile/button' //MARK:文件路径:使用源码版本组件
import Toast from '@mandmobile/toast' //MARK:文件路径:使用源码版本组件
import Dialog from '@mandmobile/dialog'
import Field from '@mandmobile/field'
import InputItem from '@mandmobile/input-item'
import CheckBox from '@mandmobile/check-box'
import CustomComponent from '@mandmobile/custom-component'
import { mapMutations, mapState, mapActions } from 'vuex'
import ResultPageAll from '@mandmobile/result-page-all'

@Component({
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [InputItem.name]: InputItem,
    [CheckBox.name]: CheckBox,
    [CustomComponent.name]: CustomComponent,
    [ResultPageAll.name]: ResultPageAll
  },
  computed: {
    ...mapState(['initInfo'])
  },
  methods: {
    ...mapActions(['init'])
  },
  watch: {
    alias: function(n, o) {
      if (n) {
        //只能输入汉字，字母和数字
        n = n.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '')
        //长度控制在maxLength和这里都要写
        if (n.length > 5) {
          n = n.slice(0, 5)
        }
      }
      this.alias = n
    },
    initInfo: function(n) {
      console.log('initInfo:' + JSON.stringify(n))
    }
  }
})
export default class IndexView extends Vue {
  name = 'IndexView'
  alias = '123'
  transpotTips = `账户号：${234234234} </br>设置交易密码，即可提现`
  aliasList = [
    { text: '工资卡', value: '工资卡' },
    { text: '消费卡', value: '消费卡' },
    { text: '理财卡', value: '理财卡' },
    { text: '还款卡', value: '还款卡' }
  ]
  card = {}

  beforeCreate() {
    console.log('vue beforeCreate SUCCESS')
  }

  created() {
    console.log('vue created SUCCESS')
  }

  mounted() {
    document.addEventListener('resume', function(event) {
      if (event != undefined && event.data != undefined) {
        alert('页面回退时带过来的内容： ' + JSON.stringify(event.data))
      }
    })

    try {
      console.warn('Vuex Store Value:' + this.$store.state.count)
    } catch (e) {
      console.warn('Vuex Store Disable')
    }
    console.log('vue mounted SUCCESS')

    this.init()
    // this.$store.dispatch('init');
  }

  alertDialog(msg, btnsNum, onSubmit, onCancel, title) {
    let param = {
      title: title ? title : '提示',
      content: msg,
      cancelText: '取消',
      confirmText: '确定',
      onConfirm: function(res) {
        if (res == 'cancel') {
          if (typeof onCancel == 'function') {
            onCancel()
          }
        } else {
          if (typeof onSubmit == 'function') {
            onSubmit()
          }
        }
      }
    }
    if (btnsNum && btnsNum == 1) {
      Dialog.alert(param) //单按钮
    } else {
      Dialog.confirm(param) //双按钮
    }
  }
  alertAgent() {
    alert(window.navigator.userAgent)
  }
  save() {
    //现在改为可以输入空来设置取消别名
    // if (tools.isEmptyStr(this.alias)) {
    //     tools.alertDialog('请先输入别名');
    // } else {
    this.setAliasConfirm()
    // }
  }
  //保存
  pushWindow() {
    //现在改为可以输入空来设置取消别名
    // if (tools.isEmptyStr(this.alias)) {
    //     tools.alertDialog('请先输入别名');
    // } else {
    // this.setAliasConfirm();
    // }

    AlipayJSBridge.call('pushWindow', {
      // 要打开页面的 URL
      url: 'main.html',
      // 打开页面的配置参数
      param: {
        readTitle: true, //自动读取 title
        showOptionMenu: false // 隐藏右边菜单
      },
      // 用于给新开的页面传递参数，可选
      // 在新开的页面使用 AlipayJSBridge.startupParams 可以获取到 passData
      passData: {
        key1: 'key1Value',
        key2: 'key2Value'
      }
    })
  }
  callRPCLogin() {
    AlipayJSBridge.call(
      'rpc',
      {
        operationType: 'login.do',
        requestData: [{ key1: 'value1' }],
        headers: {}
      },
      function(result) {
        alert(JSON.stringify(result))
      }
    )
  }
  callRPC() {
    AlipayJSBridge_call(
      'rpc',
      {
        operationType: 'AcctLost.do',
        requestData: [{ key1: 'value1' }],
        headers: {}
      },
      function(result) {
        alert(JSON.stringify(result))
      }
    )
  }

  pushWebaddJSApis() {
    AlipayJSBridge_call(
      'pushWebaddJSApis',
      {
        operationType: 'setting.aliasMgmtConfirm.do'
      },
      function(res) {
        console.log(JSON.stringify(res))
      }
    )
  }
  pushWeb() {
    //现在改为可以输入空来设置取消别名
    // if (tools.isEmptyStr(this.alias)) {
    //     tools.alertDialog('请先输入别名');
    // } else {
    // this.setAliasConfirm();
    // }

    AlipayJSBridge_call('pushWeb', {
      // 要打开页面的 URL
      url: 'main.html',
      // 打开页面的配置参数
      param: {
        readTitle: true, //自动读取 title
        showOptionMenu: false // 隐藏右边菜单
      },
      // 用于给新开的页面传递参数，可选
      // 在新开的页面使用 AlipayJSBridge.startupParams 可以获取到 passData
      passData: {
        key1: 'key1Value',
        key2: 'key2Value'
      }
    })
  }

  //设置别名确认
  setAliasConfirm() {
    let _this = this
    AlipayJSBridge_call(
      'rpc',
      {
        operationType: 'setting.aliasMgmtConfirm.do',
        requestData: {
          acctNo: _this.card.acctNo,
          acAlias: _this.alias
        }
      },
      function(res) {
        console.log(JSON.stringify(res))
        if (res.result == 'success') {
          _this.setAlias()
        } else {
          Toast.failed('ops!!!')
        }
      },
      function(msg) {}
    )
  }

  //设置别名
  setAlias() {
    let _this = this
    AlipayJSBridge_call(
      'rpc',
      {
        operationType: 'setting.aliasMgmt.do',
        requestData: {
          acctNo: _this.card.acctNo,
          acAlias: _this.alias
        }
      },
      function(res) {
        _this.alertDialog(res.result == 'success' ? '修改成功' : '修改失败', 1)
      },
      function(msg) {}
    )
  }
}
</script>

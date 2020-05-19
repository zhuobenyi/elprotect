<template>
  <main id="home" class="view" role="main">
    <!-- <div class="heading">
      <h1>
        <span>Mand Mobile</span>
      </h1>
      <p>一个基于Vue的移动端UI组件库，丰富、灵活、实用，快速搭建优质的金融类产品，让复杂的金融场景变简单。</p>
    </div>
    <md-button @click="handleClick">点我</md-button>-->
    <van-text>请输入以下信息查询心d金账户&#10;</van-text>
    <van-cell-group>
      <van-field
        :value="CifName"
        label="姓名"
        label-align="left"
        icon="question-o"
        placeholder="请输入姓名"
        input-align="right"
        bind:click-icon="onClickIcon"
      />
      <van-cell title="证件类型" is-link :value="IdType" @click="show('IdType')" />
      <van-field
        :value="IdNo"
        label="证件号码"
        label-align="left"
        icon="question-o"
        placeholder="请输入您的证件号码 "
        input-align="right"
      />
    </van-cell-group>
    <van-next-button @click="handleClick">确定</van-next-button>
    <van-normal-popup
      :show="IdTypeShow"
      name="IdType"
      title="证件类型"
      @choise="choise"
      @close="close"
      :dataList="IdTypeList"
    ></van-normal-popup>
  </main>
</template>
<script>
// import Toast from '@mandmobile/toast'; // MARK:文件路径:使用源码版本组件
import Button from '@mandmobile/van-next-button'; // MARK:文件路径:使用源码版本组件
import Popup from '@mandmobile/normal-popup'; // MARK:文件路径:使用源码版本组件
import { mapMutations, mapState } from 'vuex';
import Text from '@mandmobile/text';
import { Field, Cell } from 'vant';
// 引入全部样式
import 'vant/lib/index.css';

export default {
  name: 'home-view',
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Text.name]: Text,
    [Cell.name]: Cell,
    [Popup.name]: Popup
  },
  data () {
    return {
      CifName: '',
      IdNo: '',
      IdType: '境内居民身份证',

      IdTypeShow: false,
      IdTypeList: [
        '境内居民身份证',
        '外籍人士护照',
        '军官证',
        '港澳居民往来内地通行证',
        '台湾居民来往大陆通行证',
        '其他',
        '武警证',
        '港澳居民居住证',
        '台湾居民居居住证'
      ]
    }
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo'
    })
  },
  methods: {
    ...mapMutations(['updateUserInfo']),
    handleClick () {
      // console.log(JSON.stringify(this.$store.state.userInfo, null, 4))
      // Toast.info('不错哟~')
      AlipayJSBridge_call(
        'rpc',
        {
          operationType: 'getCashLoanInfoByCust.do',
          requestData: [
            { idNum: this.IdNo },
            { idType: this.IdType },
            { cust_name: this.CifName }
          ],
          headers: {}
        },
        res => {
          // alert(JSON.stringify(result))
          res = JSON.parse(JSON.stringify(res))
          if (res.Head.IBSReturnCode === '000000') {
            console.log(res.Body)
            let data = res.Body
            switch (data.POPUP_FLAG) {
              case 'A': {
                alert(
                  '抱歉，暂时未查询到您的心e金账户，请您确认申卡成功后再来尝	试'
                )
                break;
              }
              case 'B': {
                break
              }
              case 'D': {
                break
              }
              default: {
                break
              }
            }
          }
        }
      )
    },
    choise (name, value) {
      this[name] = value
    },
    show (name) {
      this[name + 'Show'] = true
    },
    close (name) {
      this[name + 'Show'] = false
    }
  },
  beforeCreate () {
    console.log('vue beforeCreate SUCCESS')
  },
  created () {
    console.log('vue created SUCCESS')
    this.updateUserInfo({ name: 'aa' })
    // console.log(this.userInfo.name);
  },
  mounted () {
    console.log('vue mounted SUCCESS')
  }
}
</script>

<style>
* {
  text-align: left;
}
.heading {
  text-align: center;
  margin-bottom: 48px;
}
.heading h1 {
  color: #333;
  line-height: 1.15;
  font-size: 64px;
  margin-bottom: 32px;
}
.heading h1 span {
  position: relative;
}
.heading h1 span::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 8px;
  width: 100%;
  height: 20px;
  background: #ecf6ff;
}
.heading p {
  font-size: 32px;
  color: #666;
  line-height: 56px;
}
.van-text {
  margin-left: 30px;
}
.van-cell {
  height: 100px;
  padding: 10px 60px;
  font-size: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 40px;
}
.van-field__label {
  width: 200px;
}
.van-cell__value {
  color: #333333;
  font-size: 24px;
}
input ::-webkit-input-placeholder {
  color: #d3d1d7;
}
</style>

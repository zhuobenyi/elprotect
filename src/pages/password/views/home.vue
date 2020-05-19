<template>
  <main id="home" class="view" role="main mindle">
    <van-result-page-all :transportFlag="1" :transportState="'您已申请心e金账户'" :canSlot="true">
      <div class="column">
        <div>{{'账户号： ' + this.bankcard()}}</div>
        <div>{{'设置交易密码，即可提现'}}</div>
      </div>
    </van-result-page-all>
    <!-- <md-input-item
      ref="input10"
      type="password"
      align="right"
      title="交易密码"
      placeholder="请您设置6位交易密码"
      is-virtual-keyboard
      clearable
    ></md-input-item>
    <md-input-item
      ref="input10"
      type="password"
      align="right"
      title="确认交易密码"
      placeholder="请再次输入交易密码"
      is-virtual-keyboard
      clearable
    ></md-input-item>-->
    <van-field
      :value="Password"
      type="password"
      required
      label="交易密码"
      label-align="left"
      maxlength="6"
      icon="question-o"
      placeholder="请您设置6位交易密码"
      input-align="right"
      bind:click-icon="onClickIcon"
    />
    <van-field
      :value="TrsPassword"
      type="password"
      required
      maxlength="6"
      label="确认交易密码"
      label-align="left"
      icon="question-o"
      placeholder="请再次输入交易密码"
      input-align="right"
      bind:click-icon="onClickIcon"
    />
    <div class="bottom">
      <van-field
        :value="actpassword"
        required
        maxlength="6"
        label="动态密码"
        label-align="left"
        icon="question-o"
        placeholder="请输入动态密码"
        input-align="right"
        bind:click-icon="onClickIcon"
      />
      <div class="div"></div>
      <van-button type="default">{{msg}}</van-button>
    </div>
    <div class="btn">
      <van-button type="default">确定</van-button>
    </div>
  </main>
</template>
<script>
// import Hint from '@mandmobile/hint'; // MARK:文件路径:使用源码版本组件
// import Field from '@mandmobile/field';
import ResultPageAll from '@mandmobile/result-page-all';
import InputItem from '@mandmobile/input-item';
import { Field, Button } from 'vant';
// 引入全部样式
import 'vant/lib/index.css';

// 引入单个组件样式;
// import 'vant/lib/field/index.css';
export default {
  name: 'password-view',
  components: {
    // [Hint.name]: Hint,
    [InputItem.name]: InputItem,
    [ResultPageAll.name]: ResultPageAll,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data () {
    return {
      CardNo: '',
      Password: '',
      TrsPassword: '',
      actpassword: '',
      count: 0,
      PUBLICKEY: '',
      NOTICE: ''
    }
  },
  computed: {
    msg () {
      if (this.count) {
      } else {
        return '发送动态验证码';
      }
    }
  },
  methods: {
    // 银行卡号遮挡格式化,卡号显示前六后四，中间空格
    bankcard () {
      let value = this.CardNo
      if (!value) return '';
      let data = value.substr(0, 4) + ' **** ' + value.substr(value.length - 4)
      return data
    }
  },
  created () {},
  mounted () {
    console.log(AlipayJSBridge.startupParams)
    // alert(JSON.stringify(AlipayJSBridge.startupParams, null, 4))
  }
}
</script>
<style>
.column {
  display: flex;
  flex-direction: column;
  padding: 24px 76px 90px 76px;
  font-size: 24px;
  color: #9e98a7;
}
.md-input-item {
  margin: 0px 30px;
}
.md-field-content .md-field {
  color: #9e98a7;
  background-color: transparent;
}
.md-field-item-title {
  text-align: left;
}
.van-cell {
  width: 630px;
  height: 100px;
  margin: 0 30px;
  font-size: 28px;
  display: flex;
  align-items: center;
}
.van-field__label {
  width: 170px;
  text-align: left;
}
.van-cell--required::before {
  content: "";
}
.bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.bottom .div {
  width: 2px;
  height: 32px;
  background-color: #d3d1d7;
  margin-right: 25px;
}
.bottom .van-cell {
  width: 420px;
  margin-right: 25px;
}
.van-button {
  border: 0;
  color: #904ef4;
}
.btn .van-button {
  width: 690px;
  height: 80px;
  border-radius: 42px;
  background-image: linear-gradient(135deg, #ed9bfa, #904ef4 100%);
  font-size: 28px;
  color: #ffffff;
}
</style>

<template>
  <div class="van-normal-popup">
    <van-popup v-model="show" position="bottom" @close="onClose">
      <div class="van-title">
        <van-button type="default" @click="onClose">取消</van-button>

        <div class="title">{{title}}</div>

        <van-button type="default" @click="choise">完成</van-button>
      </div>
      <div class="van-content">
        <van-picker :columns="dataList" @change="change" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Button, Popup, Picker } from 'vant'
export default {
  name: 'van-normal-popup',

  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },

  props: {
    show: false,
    name: '',
    dataList: {
      default: ['']
    },
    title: ''
  },

  data() {
    return {
      value: this.dataList[0]
    }
  },

  computed: {},

  watch: {},

  // LiftCircle Hook
  /*
  beforeCreate
  created
  beforeMount
  mounted
  beforeUpdate
  updated
  activated
  deactivated
  beforeDestroy
  destroyed
  errorCaptured
   */

  methods: {
    // MARK: private methods
    $_privateMethod() {},

    // MARK: events handler, 如 $_onButtonClick
    $_onSthEvent(event) {
      this.$emit('active', 'hello')
    },
    // 通知父级关掉
    onClose() {
      this.$emit('close', this.name)
    },
    choise() {
      this.onClose()
      this.$emit('choise', this.name, this.value)
    },
    change(picker, values) {
      this.value = values
    },

    // MARK: public methods
    publicMethod() {}
  }
}
</script>

<style lang="stylus">
.van-normal-popup {
  color: color-gray-1;
  -webkit-font-smoothing: antialiased;
  font-size: 28px;
  text-align: center;

  span {
    font-style: italic;
  }
}

.van-normal-popup .van-title {
  height: 84px;
  width: 750px;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.van-normal-popup .van-content {
  height: 434px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.van-normal-popup .van-picker li {
  text-align: center;
  font-size: 34px;
}

.van-normal-popup .title {
  flex-direction: column;
  font-size: 34px;
  color: #000000;
}

.van-normal-popup .van-button {
  padding: 0 30px;
  font-size: 28px;
  color: #903ef4;
}
</style>

<template>
  <div class="van-alert">
    <van-popup v-model="show" @close="onClose">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div class="div" />
      <div class="btn">
        <div class="hint" v-if="type=='hint'">
          <van-button type="default" @click="onClose">确定</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Button, Popup } from 'vant';
export default {
  name: 'van-alert',

  components: {
    [Button.name]: Button,
    [Popup.name]: Popup
  },

  props: {
    name: {
      default: ''
    },
    type: {
      default: 'hint'
    },
    show: {
      default: false
    },
    content: {
      default: '提示'
    }
  },

  data () {
    return {}
  },

  computed: {
    title () {
      switch (this.type) {
        default: {
          return '提示';
        }
      }
    }
  },

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
    $_privateMethod () {},

    // MARK: events handler, 如 $_onButtonClick
    $_onSthEvent (event) {
      this.$emit('active', 'hello')
    },
    // 通知父级关掉
    onClose () {
      this.$emit('close', 'Alert' + this.name)
    },

    // MARK: public methods
    publicMethod () {}
  }
}
</script>

<style lang="stylus" scoped>
.van-alert {
  color: color-gray-1;
  -webkit-font-smoothing: antialiased;
  font-size: 28px;
  text-align: center;

  span {
    font-style: italic;
  }
}

.van-alert .van-popup {
  border-radius: 20px;
}

.van-alert .title, .van-alert .content, .van-alert .btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.van-alert .title {
  width: 600px;
  height: 70px;
  font-size: 32px;
  color: #000;
  align-items: flex-end;
}

.van-alert .content {
  text-align: center;
  padding: 0 60px;
  min-height: 140px;
  font-size: 28px;
  color: #665975;
}

.van-alert .div {
  height: 1px;
  background-color: #d2d2d2;
}

.van-alert .btn .van-button {
  font-size: 28px;
}

.van-alert .btn .hint .van-button {
  height: 100px;
  width: 600px;
  border: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #0178b3;
}
</style>

<template>
  <div class="van-next-button">
    <div class="background"></div>
    <van-button type="default" @click="click">
      <slot></slot>
    </van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
export default {
  name: 'van-next-button',

  components: {
    [Button.name]: Button
  },

  props: {},

  data () {
    return {}
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
    $_privateMethod () {},

    // MARK: events handler, 如 $_onButtonClick
    $_onSthEvent (event) {
      this.$emit('active', 'hello')
    },
    click (e) {
      this.$emit('click', e)
    },

    // MARK: public methods
    publicMethod () {}
  }
}
</script>

<style lang="stylus" scoped>
.van-next-button {
  color: color-gray-1;
  -webkit-font-smoothing: antialiased;
  font-size: 28px;
  text-align: center;
  margin-top: 30px;

  span {
    font-style: italic;
  }
}

.van-button, .background {
  width: 690px;
  height: 80px;
  border-radius: 42px;
  border: 0;
}

.van-button {
  transform: translateY(-80px);
  background-color: transparent;
  color: #ffffff;
  font-size: 28px;
}

.background {
  margin: auto;
  background-image: linear-gradient(135deg, #ed9bfa, #904ef4 100%);
}
</style>

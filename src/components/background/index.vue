<template>
  <div class="md-heatEGold-background">
    <div class="img"></div>
    <div class="img-circle">
      <div class="circle top"></div>
      <div class="circle bottom"></div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'md-heatEGold-background',

  components: {},

  props: { height: '' },

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

    // MARK: public methods
    publicMethod () {}
  }
}
</script>

<style lang="stylus">
.md-heatEGold-background {
  width: 690px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  color: color-gray-1;
  -webkit-font-smoothing: antialiased;
  font-size: 28px;
  text-align: center;

  div, span {
    font-style: italic;
  }
}

.content {
  width: 100%;
  height: 100%;
  margin-top: -300px;
}

.img-circle {
  width: 100%;
  height: 100%;
  margin-top: -300px;
  transform: translate(380px, -200px);
}

.img {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, #ed9bfa, #904ef4 100%);
}

.circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
}

.img-circle .circle {
  background-color: rgba(255, 255, 255, 0.08);
}

.img-circle .bottom {
  transform: translate(100px, -100px);
}
</style>

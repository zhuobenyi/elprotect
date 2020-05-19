<template>
  <div class="van-text">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'van-text',

  components: {},

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

    // MARK: public methods
    publicMethod () {}
  }
}
</script>

<style lang="stylus">
.van-text {
  color: color-gray-1;
  -webkit-font-smoothing: antialiased;
  font-size: 24px;
  text-align: left;
  white-space: pre-line;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #9e98a7;

  span {
    font-style: italic;
  }
}
</style>

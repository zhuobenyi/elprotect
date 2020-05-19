<template>
  <div class="md-custom-component">
    自定义组件
  </div>
</template>

<script>
export default {
  name: 'md-custom-component',

  components: {
  },

  props: {
  },

  data () {
    return {
    }
  },

  computed: {
  },

  watch: {
  },

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
    $_privateMethod () {

    },

    // MARK: events handler, 如 $_onButtonClick
    $_onSthEvent (event) {
      this.$emit('active', 'hello')
    },

    // MARK: public methods
    publicMethod () {

    }
  }
}
</script>

<style lang="stylus">
.md-custom-component
  color color-gray-1
  -webkit-font-smoothing antialiased
  font-size 28px
  text-align center
  span
    font-style italic
</style>

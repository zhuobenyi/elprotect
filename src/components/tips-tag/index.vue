<template>
  <div
    class="md-tips-tag"
    :style="{background:bgColor,padding:contentLength===1 ? '': bgPadding,width:contentLength===1 ? '28px':'60px'}"
  >
    <span @click="$_onSthEvent" :style="{color:fontColor}">{{content}}</span>
  </div>
</template>

<script>
// import Tag from '../tag'

export default {
  name: 'md-tips-tag',

  components: {
    // [Tag.name]: Tag
  },

  props: {
    content: {
      type: String,
      default: '退'
    },
    bgColor: {
      type: String,
      default: '#DCF5E3'
    },
    fontColor: {
      type: String,
      default: '#4ecb74'
    },
    bgPadding: {
      type: String,
      default: '0 10px'
    }
  },

  data() {
    return {}
  },
  computed: {
    contentLength() {
      return this.content.length
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
    $_privateMethod() {},

    // MARK: events handler, 如 $_onButtonClick
    $_onSthEvent(event) {
      this.$emit('activeMethod', 'hello')
    },

    // MARK: public methods
    publicMethod() {}
  }
}
</script>

<style lang="stylus" scoped>
.md-tips-tag
  color: color-gray-1
  -webkit-font-smoothing: antialiased
  text-align: center
  // width:
  height: 28px
  // border-radius: 10px
  display: flex
  align-items: center
  justify-content: center
  // opacity: 0.2
  // width: 60px
  // height: 28px
  // background: #DCF5E3
  // background: #4ecb74
  border-radius: 4px
  // padding: 0 5px

span
  font-size: 20px
  font-weight: 400
  text-align: center
</style>

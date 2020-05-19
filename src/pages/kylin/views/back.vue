<template>
  <div>
    <md-button @click="handleClick">点我</md-button>
  </div>
</template>

<script>    
import { Component, Vue } from "vue-property-decorator";
import Button from "@mandmobile/button"; //MARK:文件路径:使用源码版本组件
import Toast from "@mandmobile/toast"; //MARK:文件路径:使用源码版本组件

@Component({
  components: {
    [Button.name]: Button
  }
})
export default class IndexView extends Vue {
  name = "IndexView";

  handleClick() {
    Toast.info("不错哟~");
    AlipayJSBridge_call(
      "rpc",
      {
        operationType: "login.do",
        requestData: { param: "param" }
      },
      function(resp) {
        console.log(JSON.stringify(resp, null, 4));
      }
    );
    AlipayJSBridge_call(
      "rpc",
      {
        operationType: "mock.do",
        requestData: { param: "param" }
      },
      function(resp) {
        console.log(JSON.stringify(resp, null, 4));
      }
    );
  }

  beforeCreate() {
    console.log("vue beforeCreate SUCCESS");
  }
  created() {
    console.log("vue created SUCCESS");
  }
  mounted() {
    try{
      console.warn("Vuex Store Value:"+this.$store.state.count);
    }catch(e){
      console.warn("Vuex Store Disable");
    }
    console.log("vue mounted SUCCESS");
  }
}
</script>
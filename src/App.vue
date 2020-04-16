<template>
  <div id="app">
    <van-notice-bar text="在线查询天气v1.0Bate版本上线啦，欢迎大家免费使用，提出你们的宝贵意见！" left-icon="volume-o" />
    <div id="nav">
      <van-tabbar v-model="active" fixed route>
        <van-tabbar-item to="/" name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/about" name="mine" icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {

  @Prop() private msg!: string;

  data() {
    return {
      active: 'home'
    }
  }
}
</script>

<style lang="scss">

</style>

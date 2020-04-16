<template>
  <div class="show">
    <h1>{{ weather.today.city }}</h1>
		<text>温度：{{ weather.today.temperature }}</text>
		<text>天气：{{ weather.today.weather }}</text>
		<text>风力：{{ weather.today.wind }}</text>
		<text>日期：{{ weather.today.date_y }}</text>
		<text>天感：{{ weather.today.wash_index }}</text>
		<text>建议：{{ weather.today.dressing_advice }}</text>

		<!-- <h2>未来7天天气</h2> -->

    <van-button type="info" @click="back" size="large">返回</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';
import qs from 'qs';

@Component
export default class Show extends Vue {
  public weather = {};

  @Prop() private data!: string;

  @Emit('my-event')
  public back(res: any) {
    return true
  }

  created() {
		this.weather = this.data;
		console.log(this.weather, '我是子组件接受到的数据')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .show {
		width: 100%;
		height: 100vh;
		background: url('../assets/bg.png') no-repeat no-repeat center;
		background-size: 100% 100%;

    h1 {
        font-size: .5rem;
        width: 100%;
        text-align: center;
        margin-bottom: .2rem;
      }
      
  }
</style>

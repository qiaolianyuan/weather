<template>
  <div class="show flex flex-column start space-between">
    <h1>{{ weather.today.city }}</h1>

		<span>温度：{{ weather.today.temperature }}</span>
		<span>天气：{{ weather.today.weather }}</span>
		<span>风力：{{ weather.today.wind }}</span>
		<span>日期：{{ weather.today.date_y }}</span>
		<span>天感：{{ weather.today.wash_index }}</span>
		<span>建议：{{ weather.today.dressing_advice }}</span>

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

  @Prop() private data!: any;

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
    height: auto;
    padding: .3rem;

    h1 {
      font-size: .5rem;
      width: 100%;
      text-align: center;
      margin-bottom: .2rem;
    }

    span {
      width: auto;
      font-size: .27rem;
      margin-bottom: .2rem;
     line-height: .4rem; 
    }
      
  }
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/banner.png">
    <Search v-if="type" msg="欢迎来到天气查询" @my-event="getMyEvent"/>
    <Show v-else :data="weatherData" @my-event="chengType" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Search from '@/components/Search.vue'
import Show from '@/components/Show.vue'
import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';

@Component({components: { Search, Show }})
export default class Home extends Vue {
  public type = true;
  public weatherData = '';

  private getMyEvent(params: any) {
    console.log(params, '我是来自子组件的数据')
    this.weatherData = params;
    this.type = false;
  }

  private chengType(type: boolean) {
    this.type = true;
  }
}

</script>

<style scoped lang="scss">
  .home {
      img {
        width: 100%;
        height: 4rem;
        display: block;
    }
  }
</style>
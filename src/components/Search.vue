<template>
  <div class="search">
    <h1>{{ msg }}</h1>
    <van-field v-model="lon" type="number" label="经度" placeholder="请输入经度 例如116"  />
    <van-field v-model="lat" type="number" label="纬度" placeholder="请输入纬度 例如39" />
    <van-button type="primary" @click="search" size="large">查询</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';
import qs from 'qs';

@Component
export default class Search extends Vue {
  public lon = '';
  public lat = '';

  @Prop() private msg!: string;

  // @Model ('input', {type: String}) lon!: string;
  // @Model ('input', {type: String}) lat!: string;

  private search() {
    this.getInfo(this.lon,this.lat)
  }

  async getInfo (lon: string, lat: string) {
    const fdata: any = qs.stringify({
      lon,
      lat,
      dtype: 'json'
    })

    try {
      const res = await this.$httpService.postFormData(fdata, false, 'geo?key=b834395a21f7cd205626263c8e231373')
      this.emitToComponent(res)
    } catch (err) {
      console.log(err)
    }
  }

  @Emit('my-event')
  public emitToComponent(res: any) {
    return res
  }

  created() {
    console.log(qs)
    // this.$httpService.getData({}, false, 
    // `index?cityname=${encodeURIComponent('苏州')}&key=b834395a21f7cd205626263c8e231373`)
    // .then((res: any) => {
    //   console.log(res)
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .search {
    padding: .3rem;

    h1 {
        font-size: .5rem;
        width: 100%;
        text-align: center;
        margin-bottom: .2rem;
      }
      
  }
</style>

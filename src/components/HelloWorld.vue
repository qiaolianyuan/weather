<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="box"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import qs from 'qs';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  created() {
    console.log(qs)
    // this.$httpService.getData({}, false, 
    // `index?cityname=${encodeURIComponent('苏州')}&key=b834395a21f7cd205626263c8e231373`)
    // .then((res: any) => {
    //   console.log(res)
    // })

    // const fdata = qs.stringify({
    //   lon: '116.39277',
    //   lat: '39.933748',
    //   dtype: 'json'
    // })

    // this.$httpService.postFormData(fdata, false, 'geo?key=b834395a21f7cd205626263c8e231373').then((res: any) => {
    //   console.log(res)
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.box {
  width: 7.5rem;
  height: 100px;
  background-color: #cdcd22;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1 {
  font-size: 12px;
}
</style>

<template>
  <div class="mine">
    <div class="info flex start items-center" v-if="type">
      <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJRseEUoVK7oeBdSx1bbJCS8zHeKScmPFrlVnKRj2z6w6qea5eSywhjvweI3vExqtUODFIW72Foqg/132" class="img"/>
      <div>欢迎JoeLy！</div>
      <van-button type="warning" @click="exit">退出</van-button>
    </div>
    <van-form @submit="onSubmit" v-else>
      <van-field
        v-model="name"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';

@Component
export default class Mine extends Vue {
  public name = '';
  public password = '';
  public type = false;

  private onSubmit(values: any) {
    console.log('submit', values);
    const user = {
      name : values['用户名'],
      password: values['密码'],
      isLogin: true
    }
    this.type = true;
    this.$store.dispatch('login', user);
  }

  private exit() {
    this.type = false;
    this.$store.dispatch('exit');
  }

  created() {
    if(this.$store.state.user.isLogin) {
      this.type = true;
    }
  }
}

</script>

<style scoped lang="scss">
  .mine {
    .info {
      width: 100%;
      padding: .3rem;
      height: 200px;
      background: url('../assets/banner.png') no-repeat center center;
      background-size: 100% 100%;

      .img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        margin-right: .1rem;
      }

      div {
        font-size: .5rem;
        color: #ffffff;
        font-weight: 600;
      }
    }
  }
</style>
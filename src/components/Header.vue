<template>
  <header v-bind:class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="isTesting">
      <p>header</p>
      <div id="nav">
        <router-link to="/">Home</router-link>||
        <router-link to="/about">About</router-link>
      </div>
    </template>
    <template v-if="!isLogin">
      <h1>Let's share</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-else>
      <h1>Let's share</h1>
      <i class="edit el-icon-edit"></i>
      <!-- <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username" />
        <ul>
          <li>
            <router-link to="my">我的</router-link>
          </li>
          <li>
            <a href="#" @click="onLogout">注销</a>
          </li>
        </ul>
      </div> -->
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isTesting: false,
      isLogin: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/base.less";

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
//
#header.no-login {
  background-color: @bgColor;
  padding: 0 12% 30px 12%;
  display: grid;
  justify-items: center;

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns {
    margin-top: 20px;
  }

  button {
    margin: 20px 5px 0;
  }
}
//
header.login {
  display: flex;
  align-items: center;
  background: @bgColor;

  h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
  }

  .edit {
    color: #fff;
    font-size: 30px;
  }


}
</style>>
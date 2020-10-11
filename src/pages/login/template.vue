<template>
  <div id="login">
    <fieldset>
      <legend>请登录</legend>
      <h4>用户名</h4>
      <el-input
        v-model="username"
        placeholder="用户名"
        size="medium"
      ></el-input>
      <h4>密码</h4>
      <el-input
        v-model="password"
        placeholder="密码"
        size="medium"
        @keyup.enter="onLogin"
        show-password
      ></el-input>
      <el-button size="medium" @click="onRegister">立即登录</el-button>
      <p class="notice">
        没有账号？
        <router-link to="/register">注册新用户</router-link>
      </p>
    </fieldset>
  </div>
</template>

<script src="./template.js"></script>
<style scoped src="../register/template.less" lang="less"></style>
<template>
  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" placeholder="请输入内容" clearable></el-input>
    <h3>内容简介</h3>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="description"
    ></el-input>
    <h3>文章内容</h3>
    <el-input
      type="textarea"
      :autosize="{ minRows: 5, maxRows: 30}"
      placeholder="请输入内容"
      v-model="content"
    ></el-input>
    <el-switch
      v-model="atIndex"
      active-text="展示到首页"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
    <div class="submit">
      <el-button type="primary" border-radius="30px" @click="onCreate">创建博客</el-button>
    </div>
  </div>
</template>

<script src='./create.js'></script>
<style lang="less" scoped src='./create.less'></style>
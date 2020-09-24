<template>
  <div id="detail">
    <!-- <section class="user-info" v-if="user"> -->
    <section class="user-info">
      <img :src="user.avatar" />
      <h3>{{title}}</h3>
      <router-link :to=`/user/${user.id}`><p>{{user.username}}</p></router-link>
    </section>
    <section class="article" v-html="markdown">文章本体</section>
  </div>
</template>

<script src="./detail.js"></script>

<style lang="less" src="./detail.less"></style>
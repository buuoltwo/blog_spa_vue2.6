<template>
  <div id="footer">
    <p><span>技术栈Vue 2.6_</span>在线多人博客项目<router-link class="href" to="https://www.jianshu.com/u/64a0466a14e6">©buuotwo</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../assets/base.less');
#footer {
  background-color: #d7d7d7;
  color: #666;
  padding: 10px;

  p {
    text-align: center;
    font-weight: 200;

    & > span {
      font-weight: lighter;
      margin-right: 5px;
    }
    & > .href {
      color: @bgColor;
    }
  }
  }
</style>
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <List msg="博客精选" msg2='index'/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import List from '@/components/List2.vue'

export default {
  name: 'Home',
  components: {
    List
  }
}
</script>

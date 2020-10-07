<template>
  <div id="app">
    <Header id="header"/>
    <main>
      <router-view/>
    </main>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="less">
@import url('./assets/common.less');
// *, *::before, *::after {
//   margin: 0;
// }
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;

  // display: flex;
  // flex-direction: column;
  min-height: 100vh;
  display: grid;
  grid: ~"auto 1fr auto / 12% 1fr 12%";
}
#header {
  grid-area: ~"1/1/2/4";
}
#footer {
  grid-area: ~"3/1/4/4";
}
main {
  // padding: 30px;
  grid-area: ~"2/2/3/3";
  // flex:1;
}


@media (max-width: 768px) {
  #app {
    grid-template-columns: 10px auto 10px;
    //  grid: ~"auto 1fr auto / 10px auto 10px";

    #header, #footer {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

}

</style>

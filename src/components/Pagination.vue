<template>
  <div class="pagination">
    <!-- <p>{{parentMessage.page}} {{parentMessage.total}}</p>
    <p>{{page}} {{total}}</p>
    <p>fanye</p> -->
  </div>
</template>

<script>
export default {
  props: ['parentMessage'],
  // data() {
  //   return {
  //     page: this.parentMessage.page,
  //     total: this.parentMessage.total,
  //   }
  // }
  computed: {
    page(){
      return this.parentMessage.page
    },
    total() {
      return this.parentMessage.total
    },
  }
};
</script>

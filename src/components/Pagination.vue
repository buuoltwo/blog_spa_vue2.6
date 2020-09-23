<template>
  <div class="pagination">
    <!-- <p>{{parentMessage.page}} {{parentMessage.total}}</p>
    <p>{{page}} {{total}}</p>
    <p>fanye</p>-->
    <el-pagination
      layout="prev, pager, next" 
      :total="total" 
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: ["parentMessage"],
  // data() {
  //   return {
  //     page: this.parentMessage.page,
  //     total: this.parentMessage.total,
  //   }
  // }
  computed: {
    page() {
      return this.parentMessage.page;
    },
    total() {
      return this.parentMessage.total;
    },
  },
  methods: {
    handleCurrentChange(value) {
      console.log(value)
    }
  }
};
</script>

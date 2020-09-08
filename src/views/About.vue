<template>
  <div class="about">
    <h1>This is an about page</h1>
     <el-button type="success" @click="handleClick">成功按钮</el-button>
     <el-button plain @click="open2">信息按钮</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick: function() {
      this.$message({
        message:"hello ha~",
        type:"success"
      })
    },
    open2() {
      this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success',
          showClose: false
      });
    }
  }
}
</script>
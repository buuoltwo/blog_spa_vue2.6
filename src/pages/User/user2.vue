<template>
  <div id="user">
    <section class="blog-post">
      <h1>用户信息</h1>
      <router-link
        class="item"
        v-for="blog in blogs"
        :key="blog.id"
        :to="{ name: 'detail', params: { blogId: blog.id } }"
      >
        <figure>
          <img :src="blog.user.avatar" :alt="blog.user.username" />
          <figcaption>{{ blog.user.username }}</figcaption>
        </figure>
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </section>
  </div>
</template>

<script>
import Blog from '../../api/blog'

export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 1,
      totalPage: 1,
    };
  },
  created() {
    this.userId = this.$route.params.id
    Blog.getBlogsByUserId(this.userId).then((res) => {
      this.blogs = res.data;
      this.page = res.page;
      this.total = res.total;
      this.totalPage = res.totalPage;
    });
  },
  methods: {
    handleCurrentChange(page) {
      console.log(page);
      Blog.getBlogsByUserId(this.userId,{page}).then((res) => {
        this.blogs = res.data;
        this.page = res.page;
        this.total = res.total;
        this.totalPage = res.totalPage;
      });
    },
  },
};
</script>

<style src="./user.less" lang="less"></style>
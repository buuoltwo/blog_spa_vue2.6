<template>
  <div id="index">
    <section class="blog-post">
      <h1>{{msg}}</h1>
      <ul>
        <li v-for="blog in blogs" :key="blog.id">blogId:{{blog.id}}</li>
      </ul>
    </section>
    <section class="pagination">

    </section>
  </div>
</template>

<script>
import Blog from "../api/blog";

export default {
  props: {
    msg: "",
  },
  data() {
    return {
      blogs: [],
      page: 1,
      total: 1,
      totalPage: 1,
    };
  },
  created() {
    Blog.getIndexBlogs().then((res) => {
      // console.log(res)
      console.log(res.data);
      this.blogs = res.data;
      this.page = res.page;
      this.total = res.total;
      this.totalPage = res.totalPage;
    });
  },
};
</script>

<style>
</style>
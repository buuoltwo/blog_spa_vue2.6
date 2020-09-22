<template>
  <div id="index">
    <section class="blog-post">
      <h1>{{msg}}</h1>
      <!-- <ul>
        <li v-for="blog in blogs" :key="blog.id">blogId:{{blog.id}}</li>
      </ul>-->
      <router-link
        class="item"
        v-for="blog in blogs"
        :key="blog.id"
        :to="{name:'detail', params:{blogId: blog.id}}"
      >
      <!-- :to="{path: `/detail/${blog.id}`}" -->
        <figure>
          <img :src="blog.user.avatar" :alt="blog.user.username" />
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pagination"></section>
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

<style lang="less" scoped>

.item {
  display: grid;
  grid: auto auto / 120px 1fr;
  margin: 20px 0;
  font-size: 12px;

  figure {
    grid-area: ~"1/1/3/2";

    img {
      object-fit: contain;
      width: 60px;
      box-shadow: 0 0 2px 0;
      border-radius: 50%;
      padding: 10px;
    }
  }
  h3 {
    grid-area: ~"1/2/2/3";
  }
  p {
    grid-area: ~"2/2/3/3";
  }
}
</style>>

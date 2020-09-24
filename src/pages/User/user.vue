<template>
  <div id="user">
    <section class="blog-post">
      <router-link
        v-for="blog in blogs"
        :key="blog.id"
        :to="{ name: 'detail', params: { blogId: blog.id } }"
        class="item"
      >
        <figure>
          <img :src="blog.user.avatar" alt="blog.user.username" />
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
        pageSize:10
        
      >
      </el-pagination>
    </section>
  </div>
</template>

<script>
import Blog from "@/api/blog.js";
export default {
  data() {
    return {
      blogs: [],
      res: null,
      total: 1,
    };
  },
  created() {
    let id = this.$route.params.id;
    Blog.getBlogsByUserId(id).then((res) => {
      this.res = res;
      this.blogs = res.data;
    });
  },
  methods: {
    handleCurrentChange(page) {
      // console.log(page)
      let id = this.$route.params.id;
      Blog.getBlogsByUserId(id,{page}).then((res) => {
        this.res = res;
        this.total = res.total;
        this.blogs = res.data;
      });
    },
  },
};
</script>

<style lang="less">
@import "../../assets/base.less";
.item {
  display: grid;
  // grid-area: auto auto / 120px 1fr;
  grid: auto auto / 120px 1fr;
  margin: 20px 0;

  figure {
    grid-area: ~"1/1/3/2";
    text-align: center;

    img {
      width: 60px;
      object-fit: contain;
      box-shadow: 0 0 2px 0;
      border-radius: 50%;
      padding: 5px;
    }
  }
  h3 {
    grid-area: ~"1/2/2/3";
  }
  p {
    grid-area: ~"2/2/span 1/span 1";
  }
}
</style>

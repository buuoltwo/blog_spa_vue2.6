<template>
  <div id="index">
    <section class="blog-post">
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
        <h3>
          {{ blog.title }}<span>{{ $friendlyDate(blog.user.createdAt) }}</span>
        </h3>
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
import Blog from "../api/blog";

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
    Blog.getIndexBlogs().then((res) => {
      this.blogs = res.data;
      this.page = res.page;
      this.total = res.total;
      this.totalPage = res.totalPage;
    });
  },
  methods: {
    handleCurrentChange(page) {
      console.log(page);
      Blog.getIndexBlogs({ page }).then((res) => {
        this.blogs = res.data;
        this.page = res.page;
        this.total = res.total;
        this.totalPage = res.totalPage;
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../assets/base.less");

.item {
  display: grid;
  grid: auto auto / 120px 1fr;
  margin: 20px 0;
  font-size: 12px;

  figure {
    grid-area: ~"1/1/3/2";
    justify-self: center;
    text-align: center;
    margin-left: 0;

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

    & > span {
      color: @textLighterColor;
      font-size: 12px;
      font-weight: normal;
      margin: 5px;
    }
  }
  p {
    grid-area: ~"2/2/3/3";
  }
}
</style>


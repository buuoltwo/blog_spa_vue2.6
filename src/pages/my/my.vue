<template>
  <div id="my">
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
        <div class="actions">
          <span
            ><router-link :to="{ name: 'edit', params: { blogId: blog.id } }"
              >修改</router-link
            ></span
          >
          <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
        </div>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination layout="prev, pager, next" :total="total" pageSize:10>
      </el-pagination>
    </section>
  </div>
</template>

<script>
import Blog from "@/api/blog.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      blogs: [],
      res: null,
      total: 1,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    // let id = this.$route.params.id;
    // Blog.getBlogsByUserId(id).then((res) => {
    //   this.res = res;
    //   this.blogs = res.data;
    // });
    let id = this.user.id;
    Blog.getBlogsByUserId(id).then((res) => {
      this.res = res;
      this.blogs = res.data;
      this.total = res.total;
    });
  },
  methods: {
    handleCurrentChange(page) {
      // console.log(page)
      let id = this.user.id;
      Blog.getBlogsByUserId(id, { page }).then((res) => {
        this.res = res;
        this.blogs = res.data;
        this.total = res.total;
      });
    },
    async onDelete(blogId) {
      // https://element.eleme.cn/#/zh-CN/component/message-box#que-ren-xiao-xi
      await this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      });
      await Blog.deleteBlog({ blogId });
      this.$message.success("删除成功");
      this.blogs = this.blogs.filter((blog) => blog.id != blogId);
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

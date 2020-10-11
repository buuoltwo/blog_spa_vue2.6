import Blog from '../../api/blog'

export default {
  data(){
    return {
      title:'',
      description:'',
      content:'',
      atIndex: false
    }
  },
  created(){
    let id = this.$route.params.blogId
    Blog.getDetail({blogId: id})
      .then( res => {
        // console.log(res)
        this.title = res.data.title
        this.description = res.data.description
        this.content = res.data.content
        this.atIndex = res.data.atIndex
      })
  },
  methods: {
    onCreate(){
      // console.log(content)
      let id = this.$route.params.blogId
      // Blog.updateBlog({blogId: id},{title:this.title,description:this.description,content:this.content, atIndex:this.atIndex})
      //   .then(res => {
      //     console.log(res)
      //     this.$message.success(`${res.status} | ${res.msg}`)
      //     this.$router.push({path: `/detail/${res.data.id}`})
      //   }).catch(() => this.$message.error("..."))
      this.$message.error("PATCH接口宕机中...")
      setTimeout(()=> this.$router.back(), 2000)
    }
  }
}
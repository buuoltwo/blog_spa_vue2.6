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
  methods: {
    onCreate(){
      // console.log(content)
      Blog.createBlog({title:this.title,description:this.description,content:this.content, atIndex:this.atIndex})
        .then(res => {
          console.log(res)
          this.$message.success(`${res.status} | ${res.msg}`)
          this.$router.push({path: `/detail/${res.data.id}`})
        })
    }
  }
}
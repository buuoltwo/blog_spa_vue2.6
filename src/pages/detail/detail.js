import Blog from '../../api/blog'
import marked from 'marked'

export default {
  data() {
    return {
      result: '',
      title: '',
      description: '',
      content: '',
      user: {},
    }
  },
  computed: {
    markdown() { return marked(this.content) }
  },
  created() {
    // Vue控制台查看Detail组件的$route:console.log(this.$route.params)
    Blog.getDetail(this.$route.params)
      .then(res => {
        this.result = res
        this.title = res.data.title
        this.description = res.data.description
        this.content = res.data.content
        this.user = res.data.user
      })
  }
}
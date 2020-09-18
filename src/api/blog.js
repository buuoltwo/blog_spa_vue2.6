import request from '../helpers/request2'

const URL = {
  GET_LIST: '/blog',
  GET_DETAIL: '/blog/:blogId',
  CREATE: '/blog',
  UPDATE: '/blog/:blogId',
  DELETE: '/blog/:blogId'
}

const Blog = {
  getBlogs({page, userId, atIndex}={ page: 1 }){
    return request(URL.GET_LIST, 'GET', {page, userId, atIndex})
  },
  getIndexBlogs({page = 1}={ page: 1}) {
    return this.getBlogs({ page, atIndex: true })
  },
  getBlogsByUserId( userId, { page=1, atIndex } = { page: 1}) {
    return this.getBlogs({page, userId:userId, atIndex})
  },
  getDetail({blogId}){
    return request(URL.GET_DETAIL.replace(':blogId',blogId))
  },
  createBlog({title='', content='', description='', atIndex = false} = { title: '', content: '', description: '', atIndex: false}) {
    return request(URL.CREATE, 'POST', {title, content, description, atIndex})
  },
  updateBlog({blogId}, { title, content, description, atIndex }) {
    return request(URL.UPDATE.replace(':blogId',blogId), 'PATCH', { title, content, description, atIndex })
  },
  deleteBlog({blogId}) {
    return request(URL.DELETE.replace(':blogId',blogId), 'DELETE')
  }
}

export default Blog
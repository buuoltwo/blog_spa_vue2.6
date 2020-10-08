import { mapActions } from "vuex"

export default {
  data(){
    return {
      username:"",
      password:""
    }
  },
  methods: {
    ...mapActions(["register"]),
    onRegister() {
      console.log(`{username:${this.username}, password:${this.password}}`)
      this.register({username:this.username, password:this.password})
        .then((data)=>{
          // console.log(data)
          this.$message.success(`${data.username} 登录成功，正在为您跳转`)
          this.$router.push({path: this.$route.query.redirect || '/'})
        })
    }
  }
}
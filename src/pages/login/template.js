import { mapActions } from "vuex"

export default {
  data(){
    return {
      username:"",
      password:""
    }
  },
  methods: {
    ...mapActions(["login"]),
    onLogin() {
      console.log(`{username:${this.username}, password:${this.password}}`)
      this.login({username:this.username, password:this.password})
        .then(()=>{
          this.$router.push({path: '/'})
        })
    }
  }
}
import request from './request'

window.request = request

request("/auth/register", "POST", {username:'',password:''})
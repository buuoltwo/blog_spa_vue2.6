import request from './request2'

window.request = request

request("/auth/register", "POST", {username:'buool2',password:'42jdjk'})
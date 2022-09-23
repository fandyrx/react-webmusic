import request from "./request"

export const getTopBanners = ()=> request({
  url:'/banner'
})
import request from "./request"

export const getTopBanners = ()=> request({
  url:'/banner'
})


export const getHotRecommends = (limit)=> request({
  url:'/personalized',
  params: {
    limit
   }
})

export const getNewAlbums = (limit) => request({
  url:"/top/album",
  params:{
    limit
  }
})

//所有榜单
export const getTopList = () =>request({
  url:"/toplist",
 
})  

//获取歌单详情  不是箭头函数需要return....低级错误
export const getListDetail = (id) => request ({
  
  url: `/playlist/detail?id=${id}`
})



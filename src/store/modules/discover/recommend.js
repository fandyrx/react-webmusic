import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



// 网络请求,异步
import { getTopBanners,getHotRecommends,getNewAlbums,getTopList,getListDetail } from 'services/recommend'


//初始state
const initialState= {
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
 
  ListDetail:[], //前三个排行榜 歌单信息
  
  topRanking:[], 
  newRanking:[],
  originRanking:[]

}

//store reducer
export const recommendSlice = createSlice({
  name: 'discover',
  initialState,
  //同步
  reducers: {
    changeIds(state,action){
      state.ids = action.payload
    
    },
    changeTopRanking(state,action) {
      state.topRanking = action.payload
      console.log(state,action.payload,'topranking')
    }
  },
  // 异步操作reducer
  extraReducers: (builder) => {
    builder.addCase(getTopBannerAction.fulfilled,(state,action) => {
      
      state.topBanners = action.payload
      
    })
    .addCase(getHotRecommendsAction.fulfilled,(state,action) => {
     
      state.hotRecommends = action.payload
    })
    .addCase(getNewAlbumsAction.fulfilled, (state,{ payload }) => {
      
      state.newAlbums = payload
    })
    .addCase(getTopListAction.fulfilled,(state,action) => {
  
      state.ListDetail = action.payload
  
      
    })
    .addCase(getMusicDetailAction.fulfilled,(state,{payload})=> {
      // console.log(payload,"我特么到底拿到了吗")
      switch(payload.name) {
        case "飙升榜" : {
           state.topRanking = payload
        }
        case "新歌榜" : {
         state.newRanking = payload
        }
        case "原创榜" : {
        state.originRanking = payload
        }
        default:
          break;
      }
     
    })
  }

  
})


//  异步action 暴露前加入extraReducers中
// 1.发现首页轮播图
export const getTopBannerAction = createAsyncThunk("recommend/getTopBannerAction", async()=>{
 
  const  res = await  getTopBanners()
  return res.banners  
})
// 2.获取热门推荐歌单
export const getHotRecommendsAction = createAsyncThunk("recommend/getHotRecommendsAction", async (limit)=> {
  const res = await getHotRecommends(limit);
  return res.result

})
 // 3.新碟上架
 export const getNewAlbumsAction = createAsyncThunk("recommend/getNewAlbums", async  (limit) => {
  const res = await getNewAlbums(limit);
  
  return res.albums || res.weekData.slice(0,15)
  
 })

 // 4.所有榜单 

export const getTopListAction = createAsyncThunk("recommend/getTopList",async (id, { dispatch }) => {
  console.log("getTopList异步执行了",id)
  const res = await getTopList()
  const list = res.list.slice(0,3)
  return list 

  
 })

// 5. 获取歌单详情
export const  getMusicDetailAction = createAsyncThunk("recommend/getMusicDetail",  async (id,action) => {
  console.log(id,"获取详情执行")
  const res = await getListDetail(id)
  // console.log(res,"网络访问过多??")
    return res.playlist

})





 


//自动生成 actions 暴露
export const { changeIds,changeTopRanking } =  recommendSlice.actions

//reducer 暴露
export default recommendSlice.reducer









// reducers: {
  // changeTopBannersAction(state, { payload }) {
  //   state.topBanners = payload
  // },
  // changeHotRecommendsAction(state,{payload}) {
  //   state.hotRecommends = payload    
  // },
  // changeNewAlbumsAction(state,{payload}) {
  //   state.newAlbums = payload
  // },
  // changeTopRankingAction(state,{payload}) {
  //   state.topRanking = payload
  // }, 

// },

//异步优化尝试,该页面同时请求这些数据,写一个createAsyncThunk    payload 如何保证各自? 只适合不传参,同一批次异步回调吧
// export const fetchRecommendDataAction = createAsyncThunk("recommend", (payload, { dispatch }) => { 
//   getTopBanners().then(res => {
//     dispatch( changeTopBannersAction(res.banners))
//   })

//   getHotRecommends(payload).then(res => {
//     dispatch(  changeHotRecommendsAction(res.result) )
//   })
 
//   getNewAlbums(payload).then(res=> {
//       dispatch(changeNewAlbumsAction(res.albums) )
//   })

//   getTopList(payload),then(res=>{
//     console.log(res,'changeTop',payload)
//     // dispatch(changeTopRanking(res))
//   })
 
// }) 
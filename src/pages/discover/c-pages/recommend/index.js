import React, { memo} from 'react'

import TopBanner from './c-cpns/top-banner/index'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RcmRanking from './c-cpns/rcm-ranking'

// 样式组件
import { Content, RecommendLeft, RecommendRight, RecommendWrapper  } from './style'


const XRecommend = memo(() => {

  return (
    <RecommendWrapper >
      <TopBanner />
        <Content className='wrap-v2'>
            <RecommendLeft >
              <HotRecommend />
                <NewAlbum/> 
              <RcmRanking />
            </RecommendLeft>
            <RecommendRight></RecommendRight>
        </Content>
    </RecommendWrapper>
  )
})



export default XRecommend








/* createStore 方式 第一版
const XRecommend = memo((props) => {
  const {getBanners} = props
  useEffect(()=>{
    getBanners();
  },[getBanners])

  return (
    <div>XRecommend</div>
  )
})
-----------------------------------------
const mapStateToProps = state =>({
  topBanners: state.recommend.topBanners
});

const mpaDispatchToProps = dispatch =>({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})
--------------------------------------------
export default connect(mapStateToProps,mpaDispatchToProps)(XRecommend) */
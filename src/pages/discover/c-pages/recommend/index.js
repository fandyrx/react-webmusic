import React, { memo} from 'react'

import TopBanner from './c-cpns/top-banner/index'

import { RecommendWrapper  } from './style'


const XRecommend = memo(() => {

  return (
    <RecommendWrapper >
      <TopBanner />
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
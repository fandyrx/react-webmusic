import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// redux-actions
import { getHotRecommendsAction } from 'store/modules/discover/recommend';

import RcmThemeHeader from 'components/theme-header-rcm'
import SongCover from 'components/song-cover';

import { HotRecommendWrapper } from './style';


const HotRecommend = memo(() => {
  const { hotRecommends } = useSelector(state => state.recommend)
  const dispatch =  useDispatch();

  useEffect(()=>{
    dispatch(getHotRecommendsAction(8))
  },[dispatch])
  return (
    <HotRecommendWrapper>
      <RcmThemeHeader title="热门推荐"  keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className='recommend-list'>
        {
            hotRecommends.map(item => {
              return   <SongCover info={item}  key={item.id}/>
            }) 
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend
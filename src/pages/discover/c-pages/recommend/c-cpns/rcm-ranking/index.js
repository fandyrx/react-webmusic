import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch,useSelector } from 'react-redux'
import { getTopListAction } from 'store/modules/discover/recommend'

import TopRanking from 'components/top-ranking'
import RcmThemeHeader from 'components/theme-header-rcm'
import { RankingWrapper } from './style'



const RcmRanking = memo(() => {

  const {ListDetail} = useSelector(state=> state.recommend,shallowEqual) 
  const dispatch = useDispatch()
 
  useEffect(()=>{
  
    // 异步网络请求
    dispatch( getTopListAction() )
 
   
  },[dispatch])

  return (
    <RankingWrapper> 
      <RcmThemeHeader title="排行" moreLink="/discover/ranking"/>
        <div className='tops'>
            <TopRanking info={ListDetail[0]} />
            <TopRanking info={ListDetail[1]} />
            <TopRanking info={ListDetail[2]} />         
        </div>
   
    </RankingWrapper>
  )
})

export default RcmRanking


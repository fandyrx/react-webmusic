import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';


import { TopRankingWrapper } from './style';
import { getMusicDetailAction } from 'store/modules/discover/recommend';

export default memo(function TopRanking(props) {
  // props and state
  const { info = {} } = props;
  const { TopRanking,newRanking,originRanking } = useSelector(state=> state.recommend,shallowEqual)
  const { tracks=[] } =   TopRanking || newRanking || originRanking 
  // redux hooks
  const dispatch = useDispatch();

  
  // other handle
  useEffect(()=>{
  
    if(info.id){
   
      dispatch( getMusicDetailAction(info.id))
    }
  },[dispatch,info])

  const playMusic = (item) => {
    console.log(item)
    // 
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      
       <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play" 
                            onClick={e => playMusic(item)}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="footer">
        <a href="/todo">???????????? &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})

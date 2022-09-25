import React, { createRef, memo, useEffect } from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
      
import { Carousel } from 'antd';

import { getNewAlbumsAction } from 'store/modules/discover/recommend.js'

import RcmThemeHeader from 'components/theme-header-rcm'
import AlbumCover from 'components/album-cover'

import { AlbumWrapper  } from './style'




const NewAlbum = memo(() => {
  //state
  const carouselRef = createRef()
  //redux
  const { newAlbums } = useSelector(state => state.recommend ,shallowEqual);
  const dispatch = useDispatch();
  //其他逻辑

  //hooks
  useEffect(() => {
    dispatch( getNewAlbumsAction() )
  },[dispatch])

  return (
    <AlbumWrapper>
      <RcmThemeHeader title="新碟上架"/>
      <div className='content'>
        <button className='arrow arrow-left sprite_02' onClick={e=>carouselRef.current.prev()}></button>
        <div className='album'>
          <Carousel dots={false} ref= { carouselRef }>
          {
              [0,1,2].map(item => {
                return (
                    <div key={item} className="page">
                       
                        {

                          newAlbums.slice(item * 5,(item + 1) * 5).map(iten => {
                            return <AlbumCover key={iten.id} 
                                               info={iten}
                                                />
                          })
                        }
                    </div>
                    )
              })
            }
          </Carousel >
        </div>
        <button className='arrow arrow-right sprite_02' onClick={e=>carouselRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})

export default NewAlbum
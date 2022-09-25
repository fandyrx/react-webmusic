import React, { memo } from 'react';

import {
  getSizeImage
} from "@/utils/format-utils";

import {
  AlbumWrapper
} from "./style";


export default memo(function AlbumCover(props) {
  const { info, size = "100px", width = "118px", bgp = "-570px" } = props;
  
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
    
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 100)} alt={info.name} />
        <a href="/abc" className="cover image_cover">{info.name}</a>
      </div>
      <div className="album-info text-nowrap">
        <div className="name">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})

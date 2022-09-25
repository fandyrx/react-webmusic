import React, { memo } from "react";


import {
  getSizeImage,
  getCount
} from "@/utils/format-utils";

import { ThemeCoverWrapper } from './style'



const SongCover = memo((props) => {
	const { info,right } = props;

	return (
		<ThemeCoverWrapper right={right} >
			<div className="cover-top">
				<img src={ getSizeImage(info.picUrl) } alt={info.name} />
			
      	<div className="cover sprite_covor">
					<div className="info sprite_covor">
						<span>
							<i className="sprite_icon erji"></i>
							{getCount(info.playCount)}
						</span>

						<i className="sprite_icon play"></i>
					</div>
				</div>

			</div>

      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source" >
        by {info.copywriter || []}
      </div>
		</ThemeCoverWrapper>
	);
});

export default SongCover;

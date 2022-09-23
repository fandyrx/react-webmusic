import React, { memo, useCallback, useEffect,useRef, useState } from "react";
// redux hook
import { useDispatch, useSelector, shallowEqual } from "react-redux";
//redux action
import { getTopBannerAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

const TopBanner = memo(() => {
		// 1. state 
	const [currentIndex,setCurrentIndex]	= useState(0)
	
	// 2. redux相关获取数据,dispatch
	const { topBanners } = useSelector(
		(state) => ({
			// topBanners : state.get("recommend").get("topBanners")
			topBanners: state.getIn(["recommend", "topBanners"]),
		}),
		shallowEqual
	);
	const dispatch = useDispatch();

	//3 . hooks
	const bannerRef = useRef() 

	useEffect(() => {
		dispatch(getTopBannerAction());
	}, [dispatch]);
 
	const bannerChange = useCallback((from,to)=>{
			// console.log(to) 
			setCurrentIndex(to);
	},[])

	//4 .其他业务逻辑
	const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20" )

	//5 .jsx
	return (
		<BannerWrapper bgImage={bgImage}>
			<div className="banner  wrap-v2">
				<BannerLeft>
				{/* 轮播图 */}
					<Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
							{
								topBanners.map((item,index)=>{
									return (
										<div className="banner-item" key={item.imageUrl}>
											<img className="image" src={item.imageUrl} alt={item.typeTitle} />
										</div>
									)
								})
							}
					</Carousel>
          
				</BannerLeft>
					{/* 右侧图 */}
				<BannerRight></BannerRight>
					{/* 控制按钮 */}
				<BannerControl>
						<button className="btn left" onClick={e=>bannerRef.current.prev()}></button>
						<button className="btn right" onClick={e=>bannerRef.current.next()}></button>
				</BannerControl>
			</div>
		</BannerWrapper>
	);
});

export default TopBanner;

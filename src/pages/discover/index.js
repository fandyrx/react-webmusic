import React, { memo } from 'react'
import { discoverMenu } from '@/services/local-data'


import {NavLink,Outlet } from 'react-router-dom'
import {
  DiscoverWrapper,TopMenu
} from './style'


const XDiscover = memo(() => {
 
  return (
    < DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {
            discoverMenu.map((item,index) => {
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
       
      </div>
         
      <Outlet/>
    </ DiscoverWrapper>
  )
})

export default XDiscover
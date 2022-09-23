import { useRoutes,Navigate } from 'react-router-dom'

import  XDiscover from 'pages/discover'
import XAlbum from 'pages/discover/c-pages/album'
import XArtist from 'pages/discover/c-pages/artist'
import XDjradio from 'pages/discover/c-pages/djradio'
import XRecommend from 'pages/discover/c-pages/recommend'
import XRanking from 'pages/discover/c-pages/ranking' 
import XSongs from 'pages/discover/c-pages/songs'


import XMine from 'pages/mine'
import XFriends from 'pages/friend'



const routes = [
  {
    path: "/",
    exact: true,
    element: <Navigate to='/discover' />
  },
  {
    path: "/discover",
    element: <XDiscover />,
    children:[
        {
          path: "discover",
          exact: true,
          element: <Navigate to='/recommend' />
        },
        {
          path: "recommend",
          element: <XRecommend/>
        },
        {
          path: "ranking",
          element: <XRanking/>
        },
        {
          path: "songs",
          element: <XSongs/>
        },
        {
          path: "djradio",
          exact: true,
          element:< XDjradio/>
        },
        {
          path: "artist",
          element:< XArtist/>
        },
        {
          path: "album",
          element:< XAlbum />
        }
        
    ]
  },
  {
    path:"/mine",
    element: <XMine/>
  },
  {
    path:"/friend",
    element: <XFriends/>
  }
]

function RouteElement() {
    const element = useRoutes(routes)
    return element
  }


export default  RouteElement;
import React, { memo } from 'react'
// import { renderRoutes  } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from 'store/index'


import XAppHeader from './components/app-header'
import XAppFooter from './components/app-footer'
import RouteElement from './router'


 // 渲染路由 组件
//  function RouteElement() {
//   const element = useRoutes(routes)
//   return element
// }


const App = memo(() => {

  
  return (
    <Provider store={store}>
      <HashRouter>
        <XAppHeader />
            <RouteElement />
        <XAppFooter/>
      </HashRouter>
    </Provider>
  )
})

export default App
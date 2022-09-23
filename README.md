# 1.项目流程
- create-react-app 创建项目,删除不需要文件,替换icon
- src 划分功能目录
- 重置样式 yarn add normalize.css
- craco配置webpack 别名

# 2.router  
- 1.yarn add react-router-config
- 2.需要使用switch,但是6版本router移除了
- 3.useRoutes替代



# 3.router 6 改变

## 组件更改 
- 1.Switch 取消,改为 Routes  
- 2.Route path="/home" element={<Home/>}   component=>替换成element,且直接写标签组件
- 3. Redirect组件替换 Navigate组件 to="/xx", 写在Route 组件的element 里面
  -  replace 属性 默认false

## 写法更改
- 1.route 配置component取消,改为element属性,值为组件标签 < xxx/>
- 2.useRoute() API,传入路由配置,返回一个组件  
```
seRoutes所在的组件，必须在<Router>中

function RouteElement() {
    const element = useRoutes(routes)
    return element
  }


export default  RouteElement;
```

# 4.样式
- 1. yarn add styled-components
- 
- 
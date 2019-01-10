import React, { Component } from 'react';
// 路由依赖
import { HashRouter, Route, Switch } from 'react-router-dom';
// 异步组件
import AsyncComponent from './asyncComponent.jsx';
// 组件页面
const Home = AsyncComponent(() => { return import('./Home/index.jsx') });
const City = AsyncComponent(() => { return import('./City/index.jsx') });
const Search = AsyncComponent(() => { return import('./Search/index.jsx') });
const User = AsyncComponent(() => { return import('./User/index.jsx') });
const NotFound = AsyncComponent(() => { return import('./NotFound/index.jsx') });
const Detail = AsyncComponent(() => { return import('./Detail/index.jsx') });
const Login = AsyncComponent(() => { return import('./Login/index.jsx') });
// 全局样式
import '@/static/css/common.less';
import '@/static/css/font.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/city" component={City} />
          <Route path="/Search/:category/:keyword?" component={Search} />
          <Route path="/User" component={User} />
          <Route path="/Detail/:id" component={Detail} />
          <Route path="/login/:router?" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

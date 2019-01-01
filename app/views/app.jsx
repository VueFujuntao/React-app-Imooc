import React, { Component } from 'react';
// 路由依赖
import { HashRouter, Route, Switch } from 'react-router-dom';
// 组件页面
import Home from './Home/index.jsx';
import City from './City/index.jsx';
import Search from './Search/index.jsx';
import User from './User/index.jsx';
import NotFound from './NotFound/index.jsx';
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
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

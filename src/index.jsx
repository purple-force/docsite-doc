import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from './components/asyncComponent';
import './index.scss';
// webpack 2.6.0以后，支持使用注释的方式给动态导入的模块添加chunk name
const Documentation = asyncComponent(() => {
  console.log('hello')
  return import(
  /* webpackChunkName: "docs" */
  './pages/documentation'
)});

class App extends React.Component {
  render() {
    // 最后两个未用模板参数的原因是路径深度不一定
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/docs/installation.md" />
          <Redirect exact from="/docs" to="/docs/installation.md" />
          <Redirect exact from="/docs/" to="/docs/installation.md" />
          <Route path="/docs/*" component={Documentation} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

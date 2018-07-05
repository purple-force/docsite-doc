import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Documentation from './pages/documentation';
import './index.scss';

class App extends React.Component {
  render() {
    // 最后两个未用模板参数的原因是路径深度不一定
    return (
      <HashRouter>
        <Switch>
          <Redirect exact from="/docs" to="/docs/installation.md" />
          <Redirect exact from="/docs/" to="/docs/installation.md" />
          <Route exact path="/" component={Home} />
          <Route path="/docs/*" component={Documentation} />
        </Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

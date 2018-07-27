import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      console.log('componentDidMount')
      const { default: component } = await importComponent();
      console.log('component', component);
      this.setState({
        component,
      });
    }

    render() {
      const C = this.state.component;
      console.log('render');
      return C
        ? <C {...this.props} />
        : null;
    }
  }

  return AsyncComponent;
}

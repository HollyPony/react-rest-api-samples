import React from "react";

import { ApiConsumer, withApi } from "react-rest-api";

export class ComponentWithConsumer extends React.Component {
  state = { loading: true, result: undefined, error: undefined };

  componentDidMount() {
    const { api, url } = this.props;

    api
      .get(url)
      .then(result => this.setState({ loading: false, result }))
      .catch(error => this.setState({ loading: false, error }));
  }

  render() {
    const { loading, result, error } = this.state;

    if (error && !loading) {
      return JSON.stringify(error, null, 2);
    }

    if (result && !loading) {
      return result.name;
    }

    return "loading ...";
  }
}

export const ComponentWithConsumerWrapper = props => (
  <ApiConsumer>
    {api => <ComponentWithConsumer api={api} {...props} />}
  </ApiConsumer>
);

export const ComponentWithWithApi = withApi(ComponentWithConsumer);

export default ComponentWithConsumerWrapper;

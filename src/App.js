import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import 'css/index.css';
import 'css/app.css';

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.object,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className="container">
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
        <div className="box">
				test
        </div>
        {this.props.children}
      </div>
    );
  }
}

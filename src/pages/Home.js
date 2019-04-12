import React, { PureComponent } from 'react';

import style from 'css/test.css';

export default class Home extends PureComponent {
  render() {
    return (
      <div>
Home
        <div className={style.box2}>test</div>
      </div>
    );
  }
}

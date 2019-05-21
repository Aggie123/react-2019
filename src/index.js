import React from 'react';
import { render } from 'react-dom';

import RootRouter, { RootRouterNested } from './router';
import './mock/mock.js';
import 'css/normalize.css';
import 'css/app.css';
import 'css/wechat.css';

render(<RootRouter />, document.getElementById('app'));

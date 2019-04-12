import React from 'react';
import { render } from 'react-dom';

import RootRouter, { RootRouterNested } from './router'
import './mock/mock.js'

render(<RootRouter />,document.getElementById('app'))
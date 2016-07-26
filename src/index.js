import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './style/main.scss'
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Router,browserHistory} from 'react-router'
import routes from './routes'

injectTapEventPlugin();

render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('root'));

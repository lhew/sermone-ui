import React from 'react';
import { Provider } from 'react-redux';

import Login from './components/Login';

import store from './store';

const App = () => <Provider store={store}><Login /></Provider>;

export default App;

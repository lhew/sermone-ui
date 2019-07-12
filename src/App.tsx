import React from 'react';
import { Provider } from 'react-redux';

import Login from './components/Login';

import store from './store';

const App = (): React.FunctionComponentElement<{}> => (
    <Provider store={store}>
        <Login />
    </Provider>
);

export default App;

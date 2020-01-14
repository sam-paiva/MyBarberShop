/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Home from './src/pages/home/index';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';

export const Routes = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Routes);

/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Home from './src/pages/home/index';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import VerifyRoutes from './src/routes/routes';
import MyTabs from './src/components/bottomBar';

export const Routes = () => {
    return (
        <Provider store={store}>
            <VerifyRoutes />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Routes);

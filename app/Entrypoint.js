/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
const { persistor, store } = configureStore();
import { ThemeContext, getTheme } from 'react-native-material-ui';
import  * as AppStyles from 'app/config/styles';

export default class Entrypoint extends Component {
    render() {
        return (
            <ThemeContext.Provider value={getTheme(AppStyles.uiTheme)}>
                <Provider store={store}>
                    <PersistGate
                        loading={<ActivityIndicator />}
                        persistor={persistor}
                    >
                        <Navigator />
                    </PersistGate>
                </Provider>
            </ThemeContext.Provider>
        );
    }
}

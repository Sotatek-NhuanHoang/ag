import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import ModalComp from '@ag/component/ModalComp';
import store, { RouterWithState } from '@ag/store';


EStyleSheet.build({

});


export default class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <View style={{ flex: 1, }}>
                    <RouterWithState />
                    <ModalComp />
                </View>
            </Provider>
        );
    }
}

import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';

import styles from './AppIntroScreen.style';

import LocComp from '@ag/component/LocComp';
import GlobalService from '@ag/service/GlobalService';


export class AppIntroScreen extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { style } = this.props;

        return (
            <View style={[styles.container, style]}>
                <Text>
                    <LocComp locKey="no_connection" />
                </Text>
            </View>
        );
    }
}


export default AppIntroScreen;

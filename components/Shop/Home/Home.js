import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Collection from './Collection';
import Category from './Category';

export default class Home extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category />
            </View>
        );
    }
}

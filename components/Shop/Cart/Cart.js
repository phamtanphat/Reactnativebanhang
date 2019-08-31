import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

export default class Cart extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#E74428' }}>
                <Text> Cart </Text>
            </View>
        );
    }
}

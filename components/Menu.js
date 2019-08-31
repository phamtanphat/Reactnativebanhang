import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

export default class Menu extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text> Menu </Text>
            </View>
        );
    }
}

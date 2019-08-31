import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

export default class Contact extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'orange' }}>
                <Text> Contact </Text>
            </View>
        );
    }
}

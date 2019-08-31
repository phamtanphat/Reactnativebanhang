import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

export default class ChangInfo extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor: 'red' }}>
                <Text> textInComponent </Text>
            </View>
        );
    }
}

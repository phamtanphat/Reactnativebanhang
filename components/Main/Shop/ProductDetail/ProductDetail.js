import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class ProductDetail extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text> Product Detail </Text>

                </TouchableOpacity>
            </View>
        );
    }
}

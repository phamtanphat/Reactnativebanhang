import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Menu extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Authentication')}
                >
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ChangInfo')}
                >
                    <Text>Go to ChangInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('OrderHistory')}
                >
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

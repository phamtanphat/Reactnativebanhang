import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

import bannerImage from '../../media/temp/banner.jpg';

const { height } = Dimensions.get('screen');
export default class Collection extends PureComponent {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}> SPRING COLLECTION </Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Image source={bannerImage} style={imageStyle} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#fff',
        margin: height * 0.01,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 8,
        padding: height * 0.01,
        paddingTop: 0
    },
    textStyle: {
        color: '#AFAEAF',
        fontSize: height * 0.03
    },
    imageStyle: {
        height: '100 %',
        width: '100%'
    }
});

import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../media/temp/little.jpg';
import maxiIcon from '../../media/temp/maxi.jpg';
import partyIcon from '../../media/temp/party.jpg';

const { height } = Dimensions.get('screen');
export default class Category extends PureComponent {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}> LIST OF CATEGORY </Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper 
                        height={height}
                        removeClippedSubviews={false}>
                        <Image source={littleIcon} style={imageStyle} />
                        <Image source={maxiIcon} style={imageStyle} />
                        <Image source={partyIcon} style={imageStyle} />
                    </Swiper>
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

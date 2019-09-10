/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react'
import { fromLeft } from 'react-navigation-transitions';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homeview from './Homeview';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

const StackNavigator = createStackNavigator({
    Homeview: { screen: Homeview },
    ProductDetail: { screen: ProductDetail },
    ListProduct: { screen: ListProduct }
}, {
        initialRouteName: 'Homeview',
        transitionConfig: () => fromLeft(1000),
        headerMode: 'none'
});
export default class Home extends PureComponent {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}


export default createAppContainer(StackNavigator);

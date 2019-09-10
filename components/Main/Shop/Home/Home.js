/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react'
import { fromLeft } from 'react-navigation-transitions';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homeview from './Homeview';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

export default class Home extends PureComponent {
    render() {
        const { categoryTypes } = this.props;
        const StackNavigator = createStackNavigator({
            Homeview: { screen: Homeview, params: categoryTypes },
            ProductDetail: { screen: ProductDetail },
            ListProduct: { screen: ListProduct }
        }, {
                initialRouteName: 'Homeview',
                transitionConfig: () => fromLeft(1000),
                headerMode: 'none'
        });
        const Stack = createAppContainer(StackNavigator);
        return (
            <Stack />
        );
    }
}

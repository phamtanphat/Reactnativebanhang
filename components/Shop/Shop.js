import React, { PureComponent } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';

const { height } = Dimensions.get('window');
export default class Shop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home'
        };
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height / 8 }}>
                    <TouchableOpacity onPress={this.openMenu.bind(this)}>
                        <Text>Open Menu</Text>
                    </TouchableOpacity>

                </View>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'Home' })}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'Cart' })}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'Search' })}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'Contact' })}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>

        );
    }
}

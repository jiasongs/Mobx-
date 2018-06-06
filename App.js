//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'mobx-react';
import stores from './src/stroe/index'
import Navigation from './src/router/Navigation';

console.ignoredYellowBox = ['Remote debugger is in', 'Warning: isMounted(...)'];

class MyClass extends Component {
    render() {
        return (
            <Provider {...stores}>
                <Navigation />
            </Provider>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default MyClass;

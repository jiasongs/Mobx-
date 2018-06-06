'use strict';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

// 相用哪个stroe就导入哪个store
@inject('footStore')
@observer
class Home extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: '主页',
            // headerRight: <Text onPress={() => navigation.navigate('ToastExample')}>测试</Text>
        };
    };

    _onPress = () => {
        const { footStore } = this.props
        footStore.changeName(Math.floor(Math.random() * 100))
    }

    _onPressGo = () => {
        this.props.navigation.navigate('Setting')
    }

    render() {
        const { footStore } = this.props
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ marginBottom: 50 }} onPress={this._onPressGo}>前往Setting</Text>
                <Text onPress={this._onPress}>{footStore.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default Home
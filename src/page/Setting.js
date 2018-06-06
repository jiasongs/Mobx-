'use strict';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('footStore')
@observer
class Setting extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: '设置',
        };
    };

    _onPress = () => {
        const { footStore } = this.props
        footStore.changeName(Math.floor(Math.random() * 100))
    }

    render() {
        const { footStore } = this.props
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text onPress={this._onPress}>{footStore.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default Setting
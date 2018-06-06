'use strict';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { observer, inject } from 'mobx-react';

@inject('loginStore')
@observer
class Login extends React.Component {

    render() {
        const { loginStore } = this.props
        return (
            <View>
                <Text onPress={() => { loginStore.doLogin('http://', { pwd: '', user: '' }) }}>登陆</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default Login
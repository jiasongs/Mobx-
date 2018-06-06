import { createStackNavigator } from 'react-navigation';
import Home from '../page/Home';
import Setting from '../page/Setting';

const nav = createStackNavigator({
    Home: { screen: Home },
    Setting: { screen: Setting },
}, {

    })

export default nav
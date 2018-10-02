import { createStackNavigator } from 'react-navigation';
import Contents from 'app/screens/Contents';

const RNApp = createStackNavigator(
    {
        Contents: {
            screen: Contents,
            navigationOptions: { header: null, gesturesEnabled: false }
        }
    },
    {
        initialRouteName: 'Contents'
    }
);

export default RNApp;

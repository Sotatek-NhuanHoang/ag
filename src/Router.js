import { createStackNavigator } from 'react-navigation';


// LoginSignup
import AppIntroScreen from '@ag/screen/LoginSignup/AppIntroScreen/AppIntroScreen';


const AppNavigator = createStackNavigator({
    AppIntroScreen: AppIntroScreen,
});


export default AppNavigator;

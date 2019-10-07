import {createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';



const Routes = createAppContainer(
  createStackNavigator({
    SignIn,
    SignUp,
    Main,
  })
)

export default Routes;

import React from 'react';
import { View } from 'react-native';
// import Splash from './screens/Splash';
import Auth from './screens/Auth';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import JadwalSolat from './screens/JadwalSolat';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AuthStack = createStackNavigator(
    {
        
        Auth: {
            screen: Auth,
            navigationOptions: {
                header: null
            }

        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }

        },
        Register: {
            screen: Register,
            navigationOptions: {
                header: null
            }

        },
         Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }

        }
      
    });

const AppStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }

        },
        JadwalSolat: {
            screen: JadwalSolat,

        }

    });

const AppContainer = createAppContainer(createSwitchNavigator(
    {

       Auth: AuthStack,
       App: AppStack
    },
    {
        initialRouteName: 'Auth',
    }
));

// const AppContainer = createAppContainer(AuthStack);

export default AppContainer;


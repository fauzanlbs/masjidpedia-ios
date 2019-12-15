import React from 'react';
import { View, Text, Image } from 'react-native';
// import HeaderComp from './components/Header';
// import Splash from './screens/Splash';
import Auth from './screens/Auth';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import JadwalSolat from './screens/JadwalSolat';

//sidebar
import Profile from './screens/menu/Profile';
import Bantuan from './screens/menu/Bantuan';
import TentangKami from './screens/menu/TentangKami';
import CustomerService from './screens/menu/CustomerService';
import RegistrasiKomunitas from './screens/menu/RegistrasiKomunitas';
import RegistrasiMasjid from './screens/menu/RegistrasiMasjid';
import Notifikasi from './screens/menu/Notifikasi';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const ImageHeader = props => (
  
    <Image source={require('./assets/logofont.png')} style={{
    width:300,
    height: 55}} />
    
  
);


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

        },
        Profile: {
            screen: Profile,
            navigationOptions: {
               headerTitleStyle: { color: '#fff' },
               header: (props) => <ImageHeader {...props} />,
            },

        },
        Bantuan: {
            screen: Bantuan,

        },
        TentangKami: {
            screen: TentangKami,

        },
        CustomerService: {
            screen: CustomerService,

        },
        RegistrasiMasjid: {
            screen: RegistrasiMasjid,

        },
        RegistrasiKomunitas: {
            screen: RegistrasiKomunitas,

        },
        Notifikasi: {
            screen: Notifikasi,

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


import React from 'react';
import { View, Text, Image } from 'react-native';
// import HeaderComp from './components/Header';
// import Splash from './screens/Splash';
import Auth from './screens/Auth';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import JadwalSolat from './screens/JadwalSolat';
import MasjidTerdaftar from './screens/MasjidTerdaftar';

//sidebar
import Profile from './screens/menu/Profile';
import Bantuan from './screens/menu/Bantuan';
import TentangKami from './screens/menu/TentangKami';
import CustomerService from './screens/menu/CustomerService';
import RegistrasiKomunitas from './screens/menu/RegistrasiKomunitas';
import RegistrasiMasjid from './screens/menu/RegistrasiMasjid';
import Notifikasi from './screens/menu/Notifikasi';

//quran
import ListSurah from './screens/quran/ListSurah';
import DetailSurah from './screens/quran/DetailSurah';

//islampedia
import Islampedia from './screens/islampedia/Islampedia';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Card, CardItem,Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input } from 'native-base';


const ImageHeader = props => (
    
    <Header style={{backgroundColor:'#696969'}}>
                    <Left>
                        <Button transparent onPress={()=>props.navigation.goBack(null)}>
                            <Icon name='arrow-back' style={{color:'gold'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Image source={require('./assets/logofont.png')} style={{
                        width:300,
                        height: 35}} resizeMode="contain"/>
                        
                    </Body>
                    <Right>
                        <Button transparent>
                         <Icon name='search' style={{color:'gold'}}/>
                        </Button>
                    </Right>
    </Header>

   
    
  
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
            navigationOptions: {
               header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
            },

        },
        Profile: {
            screen: Profile,
            navigationOptions: {
               header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
            },

        },
        Bantuan: {
            screen: Bantuan,
            navigationOptions: {
               header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
            },
        },
        TentangKami: {
            screen: TentangKami,
            navigationOptions: {
               header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
            },
        },
        CustomerService: {
            screen: CustomerService,
            navigationOptions: {
               header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
            },
        },
        RegistrasiMasjid: {
            screen: RegistrasiMasjid,
            navigationOptions: {
               header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
            },
        },
        RegistrasiKomunitas: {
            screen: RegistrasiKomunitas,
            navigationOptions: {
               header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
            },
        },
        Notifikasi: {
            screen: Notifikasi,
            navigationOptions: {
               header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
            },
        },
        ListSurah: {
            screen: ListSurah,
            navigationOptions: {
               header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
            },
        },
        DetailSurah: {
            screen: DetailSurah,
            navigationOptions: {
               header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
            },
        },
        Islampedia: {
            screen: Islampedia,
            navigationOptions: {
                header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
             },
            
        },
        MasjidTerdaftar: {
            screen: MasjidTerdaftar,
            navigationOptions: {
                header: (props) => <ImageHeader {...props} navigation={props.navigation}/>,
             },
            
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


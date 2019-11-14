import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground, View } from "react-native";
import { Container, Content, Text, List, ListItem, Icon } from "native-base";
const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}  style={{ marginTop:10,
              height: 170,
              alignSelf: "stretch",
              backgroundColor:'grey'
            }}>
            <Image
              square
              style={{ height: 80, width: 70, margin:10
              }}
              source={require('../assets/logo.png')}
            />
            <View style={{margin:10}}>
            <Text style={{fontSize:17, color:'#fff', fontFamily:'Bahnschrift'}}> Fauzan </Text>
            <Text style={{fontSize:17, color:'#fff', fontFamily:'Bahnschrift'}}> ID : MU39875839 </Text>
            <Text style={{fontSize:17, color:'#fff', fontFamily:'Bahnschrift'}}> Saldo : Rp 0 </Text>
            </View>
            </ImageBackground>
            

        <List>
          
          <ListItem itemDivider>
          <Icon name='home' style={{color:'grey', width:30}}/> 
          <Text style={{fontFamily:'Bahnschrift', marginLeft:20}}>Beranda</Text>
          </ListItem>
          <ListItem itemDivider>
          <Icon name='person' style={{color:'grey', width:30}}/> 
          <Text style={{fontFamily:'Bahnschrift', marginLeft:20}}>Profile</Text>
          </ListItem>
          <ListItem itemDivider>
          <Icon name='notifications' style={{color:'grey', width:30}}/> 
          <Text style={{fontFamily:'Bahnschrift', marginLeft:20}}>Notifikasi</Text>
          </ListItem>
          <ListItem itemDivider>
          <Icon name='business' style={{color:'grey', width:30}}/> 
          <Text style={{fontFamily:'Bahnschrift', marginLeft:20}}>Registrasi Masjid</Text>
          </ListItem>
          <ListItem itemDivider>
          <Icon name='people' style={{color:'grey', width:30}}/> 
          <Text style={{fontFamily:'Bahnschrift', marginLeft:20}}>Registrasi Komunitas</Text>
          </ListItem>
           <ListItem itemDivider>
          <Icon name='chatboxes' style={{color:'grey', width:30}}/> 
          <Text style={{fontFamily:'Bahnschrift', marginLeft:20}}>Customer Service</Text>
          </ListItem>
          <ListItem itemDivider>
          <Icon name='information-circle' style={{color:'grey', width:30}}/> 
          <Text style={{fontFamily:'Bahnschrift', marginLeft:20}}>Tentang Kami</Text>
          </ListItem>
          <ListItem itemDivider>
          <Icon name='help-circle' style={{color:'grey', width:30}}/> 
          <Text style={{fontFamily:'Bahnschrift', marginLeft:20}}>Bantuan</Text>
          </ListItem>
          <ListItem itemDivider>
          <Icon name='log-out' style={{color:'grey', width:30}}/> 
          <Text style={{fontFamily:'Bahnschrift', marginLeft:20}}>Log Out</Text>
          </ListItem>
        </List>
          
        </Content>
      </Container>
    );
  }
}
import React from "react";
import { View} from "react-native";
import { Container, Content, Text, List, ListItem, Icon } from "native-base";
import { Card, CardItem,Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input } from 'native-base';

export default const ImageHeader = props => (
    
    <Header style={{backgroundColor:'#696969'}}>
                    <Left>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}>
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

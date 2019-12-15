import React from 'react';
import {View, Text, Image} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button, Radio, DatePicker } from 'native-base';


function Profile() {
  return(

        <Container>  
        <View style={{alignItems:'center', margin:20}}>
        <Text style={{fontFamily:'Bahnschrift', fontSize:20}}>Edit Profile</Text>
        </View>
        <Content padder>	
          <Form>
            <Item floatingLabel>
              <Icon active name='ios-person' />
              <Label style={{marginLeft:10}}>Nama Lengkap</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Icon active name='ios-call' />
              <Label style={{marginLeft:10}}>Phone</Label>
              <Input />
            </Item>
            
            
             
             
          </Form>     	
        <Button onPress={() => navigate('Home')} block style={{margin:20, backgroundColor:'gold'}}>
        <Text style={{color:'#fff', fontWeight:'bold'}}>SIMPAN</Text>
        </Button>   
        </Content>    
      </Container>
      
  )
}

export default Profile;
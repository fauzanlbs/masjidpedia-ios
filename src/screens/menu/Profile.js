import React from 'react';
import {View, Image, Dimensions, TouchableOpacity, Text} from 'react-native';
import {Button, Icon, Form, Item, Label, Input, Container, Content, CheckBox, ListItem, Body} from 'native-base';
const screenWidth = Dimensions.get('window').width;

function Profile() {
  return(
      <View style={{ flex: 1 }}>
      <Container>
      <Content>
 
        

    <View style={{margin:10, borderRadius:3}}>
    <Text style={{fontFamily:'Bahnschrift', fontSize:17}}>Edit Profile</Text>

    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
       <Image style={{ height:280, width:screenWidth, margin:2}} source={{uri:'https://f0.pngfuel.com/png/1020/392/grey-and-blue-arrow-illustration-png-clip-art.png'}} resizeMode="stretch"/>
    </TouchableOpacity>

    
    <View style={{borderBottomColor:'black', borderBottomWidth:1}} />
         
        <Form>
            <Item floatingLabel>
             <Icon active name='person' />
              <Label style={{fontSize:13}}>Nama Lengkap</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
             <Icon active name='call' />
              <Label style={{fontSize:13}}>No HP (0812xxxxxxxx)</Label>
              <Input />
            </Item>
           

           
             <Button block style={{backgroundColor:'gold', margin:5}}>
              <Text style={{color:'#fff', fontWeight:'bold'}}>SIMPAN</Text>
            </Button>
         </Form>
        

        </View>



        </Content>
        </Container>

      </View>
      
  )
}

export default Profile;
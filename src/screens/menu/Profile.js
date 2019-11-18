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
              <Label style={{marginLeft:10}}>No HP (0812xxxxxxxx)</Label>
              <Input />
            </Item>
            <View style={{flexDirection:'row', margin:20}}>
             <Icon active name='ios-mail' />
             <Label style={{marginLeft:10}}>yulimiranitanjung@gmail.com</Label>
            </View>
            <Item floatingLabel>
              <Icon active name='ios-business' />
              <Label style={{marginLeft:10}}>Tempat lahir</Label>
              <Input />
            </Item>
             <Item>
              <Icon active name='date' />
               <DatePicker
	            defaultDate={new Date(2018, 4, 4)}
	            minimumDate={new Date(2018, 1, 1)}
	            maximumDate={new Date(2018, 12, 31)}
	            locale={"en"}
	            timeZoneOffsetInMinutes={undefined}
	            modalTransparent={false}
	            animationType={"fade"}
	            androidMode={"default"}
	            placeHolderText="Select date"
	            textStyle={{ color: "green" }}
	            placeHolderTextStyle={{ color: "#d3d3d3" }}
	            onDateChange={this.setDate}
	            disabled={false}
	            />
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
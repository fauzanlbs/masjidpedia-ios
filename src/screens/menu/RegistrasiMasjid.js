import React from 'react';
import {View, Image, Dimensions, TouchableOpacity, Text} from 'react-native';
import {Button, Icon, Form, Item, Label, Input, Container, Content, CheckBox, ListItem, Body} from 'native-base';
const screenWidth = Dimensions.get('window').width;

function RegistrasiMasjid() {
  return(
      <View style={{ flex: 1 }}>
      <Container>
      <Content>
 
        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
		   <Image style={{ height:280, width:screenWidth, margin:2}} source={{uri:'https://f0.pngfuel.com/png/1020/392/grey-and-blue-arrow-illustration-png-clip-art.png'}} resizeMode="stretch"/>
		</TouchableOpacity>

		<View style={{margin:10, borderRadius:3}}>
		<Text style={{fontFamily:'Bahnschrift', fontSize:17}}>Data Masjid</Text>
		
		<View style={{borderBottomColor:'black', borderBottomWidth:1}} />
		<Button style={{width:200, margin:10}} iconLeft warning>
            <Icon style={{fontSize: 30}} color='#fff' name='ios-pin' />
            <Text style={{color:'black', fontSize:12, margin:7}}>AMBIL LOKASI MASJID</Text>
        </Button>
        <Text>Lokasi : 0,0 </Text>

         
        <Form>
            <Item floatingLabel>
             
              <Label style={{fontSize:13}}>Nama Masjid</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
             
              <Label style={{fontSize:13}}>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={{fontSize:13}}>Alamat</Label>
              <Input />
            </Item>

           

         </Form>
        

        </View>




        <View style={{margin:10, borderRadius:3}}>
		<Text style={{fontFamily:'Bahnschrift', fontSize:17}}>Kontak Person</Text>
		
		<View style={{borderBottomColor:'black', borderBottomWidth:1}} />
		

         
        <Form>
            <Item floatingLabel>
             
              <Label style={{fontSize:13}}>Nama</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
             
              <Label style={{fontSize:13}}>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
             
              <Label style={{fontSize:13}}>No Handphone</Label>
              <Input />
            </Item>


             <ListItem>
            <CheckBox style={{margin:2}} checked={true} />
            <Body style={{margin:2}}>
              <Text>Saya Telah Menyetujui Syarat dan Ketentuan dari Masjidpedia</Text>
            </Body>
           </ListItem>

	           <Button block style={{backgroundColor:'gray'}}>
	            <Text style={{color:'#fff', fontWeight:'bold'}}>REGISTRASI MASJID</Text>
	          </Button>

         </Form>

        

        </View>


        </Content>
        </Container>

      </View>
      
  )
}

export default RegistrasiMasjid;
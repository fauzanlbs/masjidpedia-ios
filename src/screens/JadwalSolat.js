import React from 'react';
import {View, Text, Image} from 'react-native';
import { Container, Header, Content, Button, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';



function JadwalSolat() {
  return(
      <Container>
        
		     <Image style={{ height:230, width:380, margin:2}} source={require('../assets/bg_shubuh.png')} resizeMode="stretch"/>
			<View style={{alignItems:'center', justifyContent:'center', margin:10}}>
		 	<Text style={{margin:5, fontSize:13}}> Jakarta Pusat</Text>

	        <View style={{ height:20, width:300, borderRadius:6, margin:3, backgroundColor: 'rgba(128, 128, 128, 0.7)'}}> 
	        <Text style={{color:'#fff', textAlign:'center', fontFamily:'Bahnschrift'}}> 12 September 2019 | 11 Muharram 1441 H </Text>                    
	        </View>
	        </View>

	        <Content>
          <ListItem icon>
            <Left>
              <Text style={{ fontFamily:'Bahnschrift'}}>
                Shubuh
              </Text>
            </Left>
            <Body style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={{ backgroundColor: "#fff", fontFamily:'Bahnschrift'}}>
                04:39
              </Text>
            </Body>
            <Right>
              <Image style={{ height:30, width:30, margin:2}} source={require('../assets/adzan_ON.png')}/>
            </Right>
          </ListItem>
           <ListItem icon>
            <Left>
              <Text style={{ fontFamily:'Bahnschrift'}}>
                Dzuhur
              </Text>
            </Left>
            <Body style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={{ backgroundColor: "#fff", fontFamily:'Bahnschrift'}}>
                12:39
              </Text>
            </Body>
            <Right>
              <Image style={{ height:30, width:30, margin:2}} source={require('../assets/adzan_ON.png')}/>
            </Right>
          </ListItem>
           <ListItem icon>
            <Left>
              <Text style={{ fontFamily:'Bahnschrift'}}>
                Ashar
              </Text>
            </Left>
            <Body style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={{ backgroundColor: "#fff", fontFamily:'Bahnschrift'}}>
                15:39
              </Text>
            </Body>
            <Right>
              <Image style={{ height:30, width:30, margin:2}} source={require('../assets/adzan_ON.png')}/>
            </Right>
          </ListItem>
           <ListItem icon>
            <Left>
              <Text style={{ fontFamily:'Bahnschrift'}}>
                Magrib
              </Text>
            </Left>
            <Body style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={{ backgroundColor: "#fff", fontFamily:'Bahnschrift'}}>
                18:39
              </Text>
            </Body>
            <Right>
              <Image style={{ height:30, width:30, margin:2}} source={require('../assets/adzan_ON.png')}/>
            </Right>
          </ListItem>
           <ListItem icon>
            <Left>
              <Text style={{ fontFamily:'Bahnschrift'}}>
                Isya
              </Text>
            </Left>
            <Body style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={{ backgroundColor: "#fff", fontFamily:'Bahnschrift'}}>
                19:39
              </Text>
            </Body>
            <Right>
              <Image style={{ height:30, width:30, margin:2}} source={require('../assets/adzan_ON.png')}/>
            </Right>
          </ListItem>
        </Content>
	   
      </Container>
      
  )
}

export default JadwalSolat;
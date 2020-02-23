import React, { Component } from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import { Container, Header, Content, Button, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import axios from 'axios';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

const screenWidth = Dimensions.get('window').width;


class JadwalSolat extends Component {

  constructor(props){
		super(props);
		this.state={
      jadwal:[],
      jadwalAll:[],
      latitude: 0,
      longitude:0,
      currentDay: moment().format("DD MMMM YYYY")
    }
    // this._getCoordinat = this._getCoordinat.bind(this)
    
  }


  componentWillMount(){
    this._getCoordinat()
  }

   componentDidMount(){
   
   
   

  }

  fetchData(){
  
    let token = '9898e4c17ec6d4ad3432a0bfd152202c';
    this.state.latitude = '3.2219665'
    this.state.longitude = '101.7210999'
    let url = `https://muslimsalat.com/daily.json?latitude=${this.state.latitude}&&longitute=${this.state.longitude}&&key=${token}`;
    // console.log('ini param', url);
    axios.get(`https://muslimsalat.com/kualalumpur.json?key=${token}`).then(res => {
      console.log('yuhuuz',res.data.items[0]);
      this.setState({
        jadwal: res.data.items[0],
        jadwalAll: res.data
      })

      console.log('yuhuzzzzzzz', this.state.jadwalAll)
    })

   
    
  }

  _getCoordinat(){
    //Get location
    navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                 latitude: position.coords.latitude,
                 longitude: position.coords.longitude
            });
            this.fetchData()
        },
        (error) => console.log( "Error get location", error.message ),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 },
    );
}


render(){



  return(
      <Container>
        <Content>
		    
         <View style={{alignItems:'center', justifyContent:'center'}}>
       <Image style={{ height:280, width:screenWidth, margin:2}} source={require('../assets/bg_shubuh.png')} resizeMode="stretch"/>
        </View>
			<View style={{alignItems:'center', justifyContent:'center', margin:10}}>
		 	<Text style={{margin:5, fontSize:13}}> {this.state.jadwalAll.state}</Text>

	        <View style={{ justifyContent:'center', height:20, width:300, borderRadius:6, margin:3, backgroundColor: 'rgba(128, 128, 128, 0.7)'}}> 
  <Text style={{color:'#fff', textAlign:'center', fontFamily:'Bahnschrift'}}> {this.state.currentDay} | 11 Muharram 1441 H</Text>                    
	        </View>
	        </View>

	        <View style={{alignItems:'center'}}>
          <ListItem icon>
            <Left style={{width:'35%'}}>
              <Text style={{ fontFamily:'Bahnschrift'}}>
                Shubuh
              </Text>
            </Left>
            
            <Body style={{width:'35%', backgroundColor:'#fff'}}>
  <Text style={{fontFamily:'Bahnschrift', textAlign:'center'}}>{this.state.jadwal.fajr}</Text>
            </Body>
            
            <Right style={{width:'35%'}} >
              <Image style={{ height:30, width:30}} source={require('../assets/adzan_ON.png')}/>
            </Right>
          </ListItem>
           <ListItem icon>
            <Left style={{width:'35%'}}>
              <Text style={{ fontFamily:'Bahnschrift'}}>
                Dzuhur
              </Text>
            </Left>
            <Body style={{width:'35%', backgroundColor:'#fff'}}>
              <Text style={{ backgroundColor: "#fff", fontFamily:'Bahnschrift', textAlign:'center'}}>{this.state.jadwal.dhuhr}</Text>
            </Body>
            <Right style={{width:'35%'}}>
              <Image style={{ height:30, width:30}} source={require('../assets/adzan_OFF.png')}/>
            </Right>
          </ListItem>
           <ListItem icon>
            <Left style={{width:'35%'}}>
              <Text style={{ fontFamily:'Bahnschrift'}}>
                Ashar
              </Text>
            </Left>
            <Body style={{width:'35%', backgroundColor:'#fff'}}>
              <Text style={{ backgroundColor: "#fff", fontFamily:'Bahnschrift', textAlign:'center'}}>{this.state.jadwal.asr}</Text>
            </Body>
            <Right style={{width:'35%'}}>
              <Image style={{ height:30, width:30}} source={require('../assets/adzan_OFF.png')}/>
            </Right>
          </ListItem>
           <ListItem icon>
            <Left style={{width:'35%'}}>
              <Text style={{ fontFamily:'Bahnschrift'}}>
                Magrib
              </Text>
            </Left>
            <Body style={{width:'35%', backgroundColor:'#fff'}}>
              <Text style={{ backgroundColor: "#fff", fontFamily:'Bahnschrift', textAlign:'center'}}>{this.state.jadwal.maghrib}</Text>
            </Body>
            <Right style={{width:'35%'}}>
              <Image style={{ height:30, width:30}} source={require('../assets/adzan_ON.png')}/>
            </Right>
          </ListItem>
           <ListItem icon>
            <Left style={{width:'35%'}}>
              <Text style={{ fontFamily:'Bahnschrift'}}>
                Isya
              </Text>
            </Left>
            <Body style={{width:'35%', backgroundColor:'#fff'}}>
              <Text style={{ fontFamily:'Bahnschrift', textAlign:'center'}}>{this.state.jadwal.isha}</Text>
            </Body>
            <Right style={{width:'35%'}}>
              <Image style={{ height:30, width:30}} source={require('../assets/adzan_ON.png')}/>
            </Right>
          </ListItem>
        </View>
	   
     </Content>
      </Container>
      
  )
}

}

export default JadwalSolat;
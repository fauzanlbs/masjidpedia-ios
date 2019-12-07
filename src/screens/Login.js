import React, { Component } from 'react';
import {View, Text, Image, ToastAndroid} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button } from 'native-base';
import Home from './Home';
import {Api} from '../api/API';


export default class Login extends Component {

	 constructor(props) {
         super(props);
        this.state = {
          email: '',
          pass: ''
        };
        this.onButtonPress=this.onButtonPress.bind(this);


    }

     onButtonPress= () => {

          let api = new Api();
          api.create();
          let client = api.getClient();

          let data = {
             email:this.state.email,
             pass:this.state.pass
          }

          let user = client.post('/login',data).then((res)=>{
            if(res.status == 200){
              console.log('ini resnya', res)
              ToastAndroid.show("login berhasil", ToastAndroid.SHORT)
              this.props.navigation.navigate('Home')
            }

          }).catch((err)=>{
            console.log('ini errornya', err)
          })

       alert("ok")
        // const { navigate } = this.props.navigation;
        
        }


   

   render() {
   	const { navigate } = this.props.navigation;
  return(
     
    
     
     <Container>
    	
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
         <Image style={{ height: 200, width: 200, marginTop: 5, borderRadius: 5 }} source={require('../assets/logo.png')} />
        </View>
          <Form>
            <Item floatingLabel>
              <Icon active name='mail' />
              <Label>Email</Label>
              <Input value={this.state.email} onChangeText={text => this.setState({email:text})} />
            </Item>
            <Item floatingLabel last>
              <Icon active name='lock' />
              <Label>Password</Label>
              <Input value={this.state.pass} onChangeText={text => this.setState({pass:text})} />
            </Item>

           


          </Form>

          	
           <Button onPress={() => this.onButtonPress} block style={{margin:20, backgroundColor:'grey'}}>
            <Text style={{color:'#fff', fontWeight:'bold'}}>MASUK</Text>
            </Button>

         

          <View style={{marginTop:10,alignItems: 'center', justifyContent: 'center'}}>
           <Text style={{color:'gold',fontWeight:'bold'}}>Lupa Password?</Text>
           
           <Text style={{marginTop:10}}> ────────  Masuk dengan  ────────</Text>
           <Image style={{ height: 50, width: 50, marginTop: 5, borderRadius: 5 }} source={require('../assets/google_logo.png')} />
		</View>

        
      </Container>

     
      
  )
}
}

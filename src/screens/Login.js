import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button } from 'native-base';
import Home from './Home';


export default class Login extends Component {

	 constructor(props) {
         super(props);
        this.state = {};
        this.onButtonPress=this.onButtonPress.bind(this);

    }

    onButtonPress= () => {
       alert("ok");
        // const { navigate } = this.props.navigation;
        this.props.navigation.navigate('Home');
        };

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
              <Input />
            </Item>
            <Item floatingLabel last>
              <Icon active name='lock' />
              <Label>Password</Label>
              <Input />
            </Item>

           


          </Form>

          	
           <Button onPress={() => navigate('Home')} block style={{margin:20, backgroundColor:'grey'}}>
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

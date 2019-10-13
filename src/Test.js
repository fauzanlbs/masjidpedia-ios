import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label, Icon, Button, Tab, Tabs, TabHeading } from 'native-base';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

 class Login extends React.Component {
 
  render() {
    const { navigate } = this.props.navigation;
    return (

       <Container>
      
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
         <Image style={{ height: 200, width: 200, marginTop: 5, borderRadius: 5 }} source={require('./assets/logo.png')} />
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

            
           <Button  onPress={() => navigate('Home')} block style={{margin:20, backgroundColor:'grey'}}>
            <Text style={{color:'#fff', fontWeight:'bold'}}>MASUK</Text>
            </Button>

         

          <View style={{marginTop:10,alignItems: 'center', justifyContent: 'center'}}>
           <Text style={{color:'gold',fontWeight:'bold'}}>Lupa Password?</Text>
           
           <Text style={{marginTop:10}}> ────────  Masuk dengan  ────────</Text>
           <Image style={{ height: 50, width: 50, marginTop: 5, borderRadius: 5 }} source={require('./assets/google_logo.png')} />
    </View>

        
      </Container>

    );
  }
}

 class Home extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with`,
  });
  render() {
   
    
    return (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}

class Auth extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with`,
  });
  render() {
   
     const { navigate } = this.props.navigation;
    return (
       <Container>
       <Content>
        <Tabs style={{marginTop:20}}>
          <Tab heading={ <TabHeading activeTabStyle={{color:'gold'}} style={{color:'gold'}}><Text>MASUK</Text></TabHeading>}>
            <Login navigation={this.props.navigation}/>
          </Tab>
          <Tab heading={ <TabHeading activeTabStyle={{color:'gold'}} style={{color:'gold'}}><Text>DAFTAR</Text></TabHeading>}>
            <Login navigation={this.props.navigation}/>
          </Tab>
          
        </Tabs>
        </Content>
      </Container>
    );
  }
}




const  SimpleAppNavigator = createStackNavigator({
  Auth: { screen: Auth },
  Login: { screen: Login },
  Home: { screen: Home }
});
  


const AppContainer = createAppContainer(SimpleAppNavigator);

export default AppContainer;

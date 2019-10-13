import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Content } from 'native-base';
import Login from './Login';
import Register from './Register';


class Auth extends React.Component {
  
  
  render() {
   
    
    return (
       <Container>
       <Content>
        <Tabs style={{marginTop:20}}>
          <Tab heading={ <TabHeading activeTabStyle={{color:'gold'}} style={{color:'gold'}}><Text>MASUK</Text></TabHeading>}>
            <Login navigation={this.props.navigation}/>
          </Tab>
          <Tab heading={ <TabHeading activeTabStyle={{color:'gold'}} style={{color:'gold'}}><Text>DAFTAR</Text></TabHeading>}>
            <Register />
          </Tab>
          
        </Tabs>
        </Content>
      </Container>
    );
  }
}

export default Auth;
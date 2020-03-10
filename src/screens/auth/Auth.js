import React from "react";
import { Container, Tab, Tabs, TabHeading, Text, Content } from "native-base";
import Login from "./Login";
import Register from "./Register";

class Auth extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Tabs
            tabBarUnderlineStyle={{ backgroundColor: "gold" }}
            style={{ marginTop: 20 }}
          >
            <Tab
              activeTextStyle={{ color: "gold" }}
              heading={
                <TabHeading activeTextStyle={{ color: "gold" }}>
                  <Text>MASUK</Text>
                </TabHeading>
              }
            >
              <Login navigation={this.props.navigation} />
            </Tab>
            <Tab
              activeTextStyle={{ color: "gold" }}
              heading={
                <TabHeading activeTextStyle={{ color: "gold" }}>
                  <Text>DAFTAR</Text>
                </TabHeading>
              }
            >
              <Register />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default Auth;

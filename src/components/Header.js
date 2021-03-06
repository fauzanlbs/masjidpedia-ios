import React from "react";
import { Icon } from "native-base";
import { Header, Button, Left, Right, Body, Icon } from "native-base";

const ImageHeader = props => (
  <Header style={{ backgroundColor: "#696969" }}>
    <Left>
      <Button transparent onPress={() => this.props.navigation.goBack()}>
        <Icon name="arrow-back" style={{ color: "gold" }} />
      </Button>
    </Left>
    <Body>
      <Image
        source={require("./assets/logofont.png")}
        style={{
          width: 300,
          height: 35
        }}
        resizeMode="contain"
      />
    </Body>
    <Right>
      <Button transparent>
        <Icon name="search" style={{ color: "gold" }} />
      </Button>
    </Right>
  </Header>
);

export default ImageHeader;

import React from "react";
import { Image, TouchableOpacity, View, StyleSheet, Text } from "react-native";

function SquareMenu(props) {
  var icon;
  if (props.iconSource) {
    icon = <Image style={styles.icon} source={props.iconSource} />;
  }
  return (
    <View>
      <TouchableOpacity {...props} style={styles.container}>
        {icon}
      </TouchableOpacity>
      <View style={{ margin: 3 }}>
        <Text style={styles.title}> {props.title} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 2,
    borderRadius: 13,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 80,
    width: 80,
    margin: 2
  },
  title: {
    fontSize: 12,
    width: 50,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "Bahnschrift"
  }
});

export default SquareMenu;

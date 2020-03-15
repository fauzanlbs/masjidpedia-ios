import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function MutiaraHadistList() {
  return (
    <View style={styles.containerPoster}>
        <View style={{alignItems:'center', justifyContent:'center', width:350}}>
          <Image style={{ height:280, width:350, margin:2}} source={{uri:'https://yufidia.com/wp-content/uploads/2019/03/HADITS-012-KOTAK-REV.png'}} resizeMode="stretch"/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPoster:{
    justifyContent:'center', alignItems:'center', backgroundColor:'#fff', borderWidth:0.5,  borderRadius:5
  }
})

export default MutiaraHadistList;

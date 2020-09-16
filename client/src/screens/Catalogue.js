import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Letter from "../components/Letter"

const Catalogue = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Letter source={require('../../assets/products/splash.png')} navigation={navigation}/>
        <Letter source={require('../../assets/products/sony.jpeg')} navigation={navigation}/>
        <Letter source={require('../../assets/products/celu.jpeg')} navigation={navigation}/>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(242, 242, 242)",
    paddingTop: 30,
  },
})

export default connect()(Catalogue)

import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,  
  StyleSheet,
} from "react-native";

const Catalogue = () => {
  return (
    <View style={styles.container}><Text>FUNCIONA</Text></View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
})

export default connect()(Catalogue)
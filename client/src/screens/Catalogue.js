import React from "react";
import { connect } from "react-redudx";
import {
  View,
  Text,  
  StyleSheet,
} from "react-native";

const Catalogue = () => {
  return (
    <View style={styles.container}></View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
})

export default connect()(Catalogue)
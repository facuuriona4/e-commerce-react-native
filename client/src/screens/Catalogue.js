import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,  
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Letter
} from "./"

const Catalogue = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Letter />
        <Letter />
        <Letter />
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
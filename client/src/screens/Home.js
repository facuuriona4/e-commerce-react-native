import React from "react";
import { connect } from "react-redux";
import {View, Image, StyleSheet} from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

//Importaciones de Componentes:
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
      <Navbar/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
    top: getStatusBarHeight(),
  },
  image: {
    paddingTop:10,
    flex:0.11,
    width:'100%',
    height:'20%',
    marginBottom:3
     
    },
})

export default connect()(Home)
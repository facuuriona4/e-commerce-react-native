import React from "react";
import { connect } from "react-redux";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Navbar from '../components/Navbar';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const LetterDetail = ({sourceImage}) => {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <View>
          <Text style={styles.headerTextEstado}>Nuevo | 651 vendidos</Text>
        </View>
        <View style={styles.descriptionHeaderContainer}>
          <Text style={styles.descriptionHeader}>Samsung Galaxy Ultra 128 GB Cosmic black 12 GB RAM</Text>
        </View>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={require("../../assets/products/celu.jpeg")}></Image>
        </View>
        <View style={styles.containerTecnicalDetailsParent}>
          <View style={styles.containerTecnicalDetails}>
            <Text style={styles.key}>Memoria interna:</Text>
            <Text style={styles.value}>128 GB</Text>
            <View style={styles.containerMayor}>
              <Text style={styles.mayor}>></Text>
            </View>
          </View>
          <View style={styles.containerTecnicalDetails}>
            <Text style={styles.key}>Es Dual SIM</Text>
            <Text style={styles.value}>No</Text>
            <View style={styles.containerMayor}>
              <Text style={styles.mayor}>></Text>
            </View>
          </View>
          <View style={styles.containerTecnicalDetails}>
            <Text style={styles.key}>Memoria RAM:</Text>
            <Text style={styles.value}>12 GB</Text>
            <View style={styles.containerMayor}>
              <Text style={styles.mayor}>></Text>
            </View>
          </View>
          <View style={styles.containerTecnicalDetails}>
            <Text style={styles.key}>Color:</Text>
            <Text style={styles.value}>Cosmic black</Text>
            <View style={styles.containerMayor}>
              <Text style={styles.mayor}>></Text>
            </View>
          </View>
        </View>
        <View style={styles.priceContainer}><Text style={styles.price}>$ 114.999</Text></View>
        <View style={styles.containerContainerEnvioConNormalidad}>
          <View style={styles.containerEnvioConNormalidad}><Text style={styles.envioConNormalidad}>Envío con normalidad</Text></View>
        </View>
        <View style={styles.abajoDeEnvioConNormalidad}></View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    top: getStatusBarHeight(),
    backgroundColor: "white"
  },
  headerTextEstado: {
    fontSize: 11,
    color: "#8b9b9c",
    margin: 13,
  },
  descriptionHeaderContainer: {
    marginRight: "5%",
    marginLeft: "5%",
    flexDirection: "row",
    justifyContent: "center",
  },
  descriptionHeader: {
    fontSize: 14
  },
  containerImage: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  containerTecnicalDetailsParent: {
    paddingTop: 10,
    height: 250,
    justifyContent: "space-between",
    alignItems: "center"
  },
  containerTecnicalDetails: {
    flexDirection: "row",
    height: 50,
    width: "90%",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "#e3e1e2",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f1f1f1"
  },
  key: {
    marginLeft: "10%",
    fontSize: 15
  },
  value: {
    marginLeft: "2%",
    fontWeight: "bold",
    fontSize: 15
  },
  containerMayor: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: "6%",
  },
  mayor: {
    color: "#4b90c9",
    fontWeight: "bold",
    fontSize: 26
  },
  priceContainer: {
    height: 80,
    justifyContent: "center"
  },
  price: {
    paddingLeft: "5%",
    fontSize: 30,
  },
  containerContainerEnvioConNormalidad: {
    paddingLeft: "5%",
  },
  containerEnvioConNormalidad: {
    flexShrink: 0,
    justifyContent: "center",
    height: 20,
    width: 140
  },
  envioConNormalidad: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#2968c8",
    backgroundColor: "#2968c8",
    borderRadius: 3,
    color: "white",
  },
  abajoDeEnvioConNormalidad: {
    height: 200,
  },
});

export default connect()(LetterDetail);

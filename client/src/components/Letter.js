import React from "react";
import { connect  } from "react-redux";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";

const Letter = ({source, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
          <View style={styles.containerTextHeader}>
            <Text style={styles.textHeader}>oferta del dia</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("LetterDetail")}>
            <View style={styles.containerImage}>
              <Image style={styles.image} source={source}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.containerDescriptionProduct}>
            <View style={styles.containerDescriptionProductText1}>
              <Text style={styles.descriptionProductText1}>samsung smart tv 50 pulgadas uhd 4k hdmi 3d sonido envolvente </Text>
            </View>
            <View style={styles.containerDescriptionProductText2}>
              <Text style={styles.descriptionProductText2}>$ 114.999</Text>
              <Text style={styles.descriptionProductTextOFF}>19% OFF</Text>
            </View>
          </View>
          <View style={styles.containerDescriptionProductText3}>
              <Text style={styles.descriptionProductTextIntereses}>18x $ 6.388 sin interes</Text>
              <Text style={styles.descriptionProductTextEnvio}>Envío gratis</Text>
          </View>
          <View style={styles.button}>
            <Button
              title="agregar al carrito"
              color="#ffa64d"
            />
          </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  box: {
    width: 350,
    height: 550,
    backgroundColor: "white",
    borderRadius: 7,
    flexShrink: 0,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 10,

  },
  containerTextHeader: {
    height: 55,
    borderBottomColor: "rgb(230, 230, 230)",
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  textHeader: {
    paddingTop: 16,
    paddingLeft: 12,
    fontWeight: "normal",
    textTransform: "capitalize",
  },
  containerImage: {
    height: 320,
    alignItems: "center"
  },
  image: {
    resizeMode: "contain",
    width: 350,
    height: 315
  },
  containerDescriptionProduct: {
    flex: 1,
    height: 100,
  },
  containerDescriptionProductText1: {
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
  },
  descriptionProductText1: {
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: 13,
  },
  containerDescriptionProductText2: {
    marginLeft: 15,
    flexDirection: "row"
  },
  descriptionProductText2: {
    fontSize: 20,
    letterSpacing: -.5
  },
  descriptionProductTextOFF: {
    fontSize: 13,
    marginTop: 7,
    marginLeft: 5,
    color: "green",
  },
  containerDescriptionProductText3: {
    flex: 1,
    justifyContent: "center",
    borderBottomColor: "rgb(230, 230, 230)",
    borderBottomWidth: 1,
    borderStyle: "solid",
    marginLeft: 15,
    marginRight: 15
  },
  descriptionProductTextIntereses: {
    color: "green"
  },
  descriptionProductTextEnvio: {
    color: "green"
  },
  button: {
    paddingTop: 5,
    alignItems: "center",
    paddingBottom: 5
  },
});

export default connect(null)(Letter)

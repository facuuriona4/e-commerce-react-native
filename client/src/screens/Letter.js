import React from "react";
import { connect  } from "react-redux";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const Letter = ({}) => {
  return (    
    <View style={styles.container}>
      <View style={styles.box}>        
        <View style={styles.containerTextHeader}>
          <Text style={styles.textHeader}>deal of the day</Text>
        </View>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={require('../../assets/products/splash.png')}></Image>
        </View>              
        <View style={styles.containerDescriptionProduct}>    
          <View style={styles.containerDescriptionProductText1}>
            <Text style={styles.descriptionProductText1}>samsung smart tv 50 pulgadas uhd 4k hdmi 3d sonido envolvente </Text>            
          </View>
        </View>
        <View style={styles.button}>
          <Button          
            title="Add to cart"
            color="#ffa64d"
            accessibilityLabel="Learn more about this purple button"            
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
    textTransform: "capitalize"       
  },
  containerImage: {    
    height: 340,    
    borderBottomColor: "rgb(230, 230, 230)",
    borderBottomWidth: 1.5,
    borderStyle: "solid",    
    alignItems: "center"
  },
  image: {
    width: 350,
    height: 350
  },
  containerDescriptionProduct: {      
    height: 100,    
    borderBottomColor: "rgb(230, 230, 230)",
    borderBottomWidth: 1.5,
    borderStyle: "solid",    
  },
  containerDescriptionProductText1: {    
    flex: 1,    
    height: 30, 
    paddingLeft: 15,
    paddingRight: 15,         
  },
  descriptionProductText1: {
    textTransform: "capitalize",    
    fontWeight: "400",
    fontSize: 12,
  },  
  button: {
    flex: 1,
    alignItems: "center",        
    justifyContent: "center"    
  },
});

export default connect()(Letter)
import React from "react";
import { connect } from "react-redux";
import {View, Text, TextInput, StyleSheet, Image} from "react-native";
import { Icon } from 'react-native-elements';


const Navbar = () => {
    const [text, setText] = React.useState('');
  
    return (
       
            <View style={styles.container}>
                <View style={styles.topcont}>
                    <Icon style={styles.icons} name='toc' />
                    <View style={styles.inputgroup}>
                    <TextInput style={styles.inputs}
                    inlineImageLeft='search_icon'
                        placeholder='Search Products..'
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                    <Icon style={styles.iconsearch} name='search' />
                </View>
                <Icon style={styles.icons} name='shopping-cart' />
                </View>
                <View style={styles.welcome}>
                    <Icon name='person' />
                    <Text style={{color:'gray'}}> Welcome Guillermo Ambroggio</Text>
                </View>
            </View>
       
    )
    };
    
const styles = StyleSheet.create({
  container: {
    
    borderColor:'#e0e0e0',
    borderBottomWidth: 1,
    //borderTopWidth:1,
    paddingTop: 10,
  },
  topcont:{
    display:'flex',
    flexDirection:'row',
    height:35,
    justifyContent:'space-evenly' 
  },
  icons: {
    backgroundColor:'orange',
    borderRadius:10,
    width: 40,
    height:35,
    justifyContent:'center'
  },
  iconsearch: {
    width: 30,
    height:35,
    justifyContent:'center',
    
  },
  inputs:{
    textAlign:'left',
    paddingLeft:15,
    color:'gray'
  },
  inputgroup:{
    borderColor:'lightgray',
    backgroundColor:'#e0e0e0',
    borderRadius: 10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'65%'
  },
  welcome:{
    borderColor:'lightgray',
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'95%'
  },

  
  
})

export default connect()(Navbar)
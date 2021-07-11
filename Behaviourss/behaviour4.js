import {View, Text, ActivityIndicator} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';


function behaviour4(){

    return(
     
      <View>
      <View style={styles.container}>
         <Image
        style={styles.image}
        source={{ uri:"https://cdn.shopify.com/s/files/1/0526/2386/8096/collections/pets-cat-toys_1800x.jpg?v=1619381340" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>

        <View> 
        <Text style={styles.title}>
        Cat Toys
        </Text>
        </View>

         <View> 
        <Text style={styles.parag}>
        Cat toys are ideal for offering your cat a way to keep them entertained for hours and allow them to exercise safely.
        They are various cat toys on the market. Here are our top picks to help you chose.
        Cat toys are ideal for offering your cat a way to keep them entertained for hours and allow them to exercise safely.
        </Text>
        </View>

      <View style={styles.container}>
        <Image
        style={styles.image}
        source={{ uri:"https://media.wired.com/photos/5fb5af0289ec42a6fa779e9c/master/w_2400,h_1800,c_limit/Gear-Cat-Toy-1226448423.jpg" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>
        </View>
      
    
    )
  }

export default behaviour4;

const styles = StyleSheet.create({
    body:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#EBEAED',
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    },
    image: {
      width: 350,
      height: 250,
      borderRadius: 20,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:10,
      paddingHorizontal: 10
    },
    parag: {
      fontSize: 16,
      fontFamily: 'sans-serif' ,
      paddingTop: 7,
      marginHorizontal: 7,
      marginBottom: 7
    },
  });
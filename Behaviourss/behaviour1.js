import {View, Text, ActivityIndicator} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';


function behaviour1(){

    return(
     <View>
      
      <View style={styles.container}>
         <Image
        style={styles.image}
        source={{ uri:"https://t2.ea.ltmcdn.com/en/images/2/0/8/how_to_calm_an_aggressive_cat_802_600.jpg" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>

        <View> 
        <Text style={styles.title}>
        Agression in Cats
        </Text>
        </View>

         <View> 
        <Text style={styles.parag}>
        Cats can be small as compared to dogs,
        however their tooth and claws can inflict a few critical pain,
        probably main to contamination in human beings acknowledged as “cat scratch fever”.
        Any signal of pussycat aggression need to be taken seriously,
        because it factors to a root trouble inflicting your cat stress.       
        </Text>
        </View>
        <View style={styles.container}>
        <Image
        style={styles.image}
        source={{ uri:"https://www.evcilhayvanal.com/wp-content/uploads/2020/02/Sald%C4%B1rgan-Kedi-Nas%C4%B1l-Uysalla%C5%9Ft%C4%B1r%C4%B1l%C4%B1r-1-1024x576.jpg" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>
        

        </View>
      
    
    )
  }

export default behaviour1;

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
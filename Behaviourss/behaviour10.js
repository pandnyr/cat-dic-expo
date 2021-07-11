import {View, Text, ActivityIndicator} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';



function behaviour10(){

    return(
     
      <View>
      <View style={styles.container}>
         <Image
        style={styles.image}
        source={{ uri:"https://icatcare.org/app/uploads/2019/03/caring-for-your-cats-eyes-1.png" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>

        <View> 
        <Text style={styles.title}>
        Cat Eyes
        </Text>
        </View>

         <View> 
        <Text style={styles.parag}>
        One minute your cat’s eyes are glued on you, 
        the subsequent he reputedly needs not anything to do with you. 
        So what gives? When your cat is staring you down he might be simply looking to get your attention.
        If the stare is intense, this “staring contest” ought to imply that he's on excessive alert approximately a person or a situation.
        It is suggested to now no longer have a take a observe your cat immediately withinside the eyes. As with any animal,
        cats see that is an act of aggression in practise for a fight.        
        </Text>
        </View>

        

        </View>
      
    
    )
  }

export default behaviour10;

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
    item: {
      fontSize: 14,
      paddingTop: 7,
      marginHorizontal: 7,
      marginBottom: 7
    },
  });
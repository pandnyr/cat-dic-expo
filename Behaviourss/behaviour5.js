import {View, Text, ActivityIndicator} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';



function behaviour5(){

    return(
     
      <View>
      <View style={styles.container}>
         <Image
        style={styles.image}
        source={{ uri:"https://www.myhappypets.com/sites/default/files/tips-to-enrich-cats-life.jpg" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
      </View>
        <View> 
        <Text style={styles.title}>
        Enriching Your Cat
        </Text>
        </View>

         <View> 
        <Text style={styles.parag}>
        To provide a truly enriching environment for our indoor cats, we must think about how to provide resources and activities that mimic what they would naturally do in the wild. If we can do this well, then we will have the best of both worlds; the safety and consistency of an indoor environment and the engagement and fulfillment of the outdoor environment.


        </Text>
        </View>

        

        </View>
      
    
    )
  }

export default behaviour5;

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
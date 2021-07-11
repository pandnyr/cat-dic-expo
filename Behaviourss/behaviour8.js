import {View, Text, ActivityIndicator} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';



function behaviour8(){

    return(
     
      <View>
      
      <View style={styles.container}>
         <Image
        style={styles.image}
        source={{ uri:"https://cdn.shopify.com/s/files/1/1831/0741/files/7-Reasons-Your-Cat-Brings-You-Gifts.jpg?v=1554470133" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>

        <View> 
        <Text style={styles.title}>
        Bring You "Gifts"
        </Text>
        </View>

         <View> 
        <Text style={styles.parag}>
        Behaviorists have some theories on why your cat is continual in his pursuit of leaving you their kills. Even aleven though this dependancy can be perceived as a gross one- your kitty is acknowledging you as a member of his group, and is sharing his searching achievement with you. He can be thanking you for looking after him or possibly you pay greater interest to him while he generously brings you rodents, birds, or insects. If that is a conduct you would love to reduce of your outside cat, strive setting a bell on his collar in order that it's far greater tough to hunt.
        </Text>
        </View>

        

        </View>
      
    
    )
  }

export default behaviour8;

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
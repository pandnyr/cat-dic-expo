import {View, Text, ActivityIndicator} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';



function behaviour9(){

    return(
     
      <View>
      <View style={styles.container}>
         <Image
        style={styles.image}
        source={{ uri:"https://www.thesprucepets.com/thmb/exD0ZE98DmlzLW2oOBqTCfiE7-c=/5096x2866/smart/filters:no_upscale()/cat-on-bed-629219532-591322493df78c92832645b9.jpg" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>

        <View> 
        <Text style={styles.title}>
        Feline Kneading
        </Text>
        </View>

         <View> 
        <Text style={styles.parag}>
        When your cat presses his paws into you, and massages returned and forth- this will be a alternatively fun pussycat behavior. Your kitty’s intuition to try this lines returned to their earliest days of nursing. By urgent his paws on his mother’s mammary glands, it endorsed higher milk production. When your cat does this as an person he's both content, and displaying that he's happy, or he is making an attempt to relieve strain and the addiction is one to calm him down. Either way, take it as a praise which you remind him of his mommy!        </Text>
        </View>

        

        </View>
      
    
    )
  }

export default behaviour9;

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
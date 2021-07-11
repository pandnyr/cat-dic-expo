import {View, Text, ActivityIndicator} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';



function behaviour7(){

    return(
     
      <View>
      <View style={styles.container}>
         <Image
        style={styles.image}
        source={{ uri:"https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>

        <View> 
        <Text style={styles.title}>
        Chattering
        </Text>
        </View>

         <View> 
        <Text style={styles.parag}>
        You have possibly heard your cat emit a quick and severe enamel chattering- specially once they spot a hen even as looking at out of a window. Behaviorists speculate that that is due to the fact your cat is pissed off that they can not get out of doors to seek prey. They additionally can be excited and barely aggravated. Others say that this extraordinary jaw motion can be your kitty’s herbal intuition that permits their muscular tissues to put together for the act of killing prey. Either way, this conduct is absolutely regular in your feline.
        </Text>
        </View>

        

        </View>
      
    
    )
  }

export default behaviour7;

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
import {View, Text, ActivityIndicator} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';



function behaviour11(){

    return(
     
      <View>
      <View style={styles.container}>
         <Image
        style={styles.image}
        source={{ uri:"https://ak.picdn.net/shutterstock/videos/1034907074/thumb/1.jpg" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>

        <View> 
        <Text style={styles.title}>
        Rolling Around        
        </Text>
        </View>

         <View> 
        <Text style={styles.parag}>
        Rolling round on their lower back leaves them in a inclined position,
        so if fluffy is doing this in the front of you- take it as a compliment!
        He feels secure round you and you've got earned his trust.
        A roll at the ground manner that he is attempting to have interaction you in a bit play time.       
        </Text>
        <View style={styles.container}>
        <Image
        style={styles.image}
        source={{ uri:"https://uploads.metamorphosis.com/wp-content/uploads/sites/2/2021/04/shutterstock_1165662241-1.jpg" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>

        </View>

        

        </View>
      
    
    )
  }

export default behaviour11;

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
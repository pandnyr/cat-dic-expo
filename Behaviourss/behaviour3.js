import {View, Text, ActivityIndicator} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';


function behaviour3(){

    return(
     
      <View>
      <View style={styles.container}>
         <Image
        style={styles.image}
        source={{ uri:"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>

        <View> 
        <Text style={styles.title}>
        Meowing and Yowling
        </Text>
        </View>

         <View> 
        <Text style={styles.parag}>
        The cat’s meow is her way of communicating with people. Cats meow for many reasons—to say hello, to ask for things,
        and to tell us when something’s wrong. Meowing is an interesting vocalization in that adult cats don’t actually meow at each other,
        just at people. Kittens meow to let their mother know they’re cold or hungry, but once they get a bit older, cats no longer meow to other cats.
        But they continue to meow to people throughout their lives, probably because meowing gets people to do what they want.
        Cats also yowl—a sound similar to the meow but more drawn out and melodic. Unlike meowing, adult cats do yowl at one another,
        specifically during breeding season.
        </Text>
        </View>
        

        

        </View>
      
    
    )
  }

export default behaviour3;

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
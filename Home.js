import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';
import Article from './components/article';



function Home({navigation}){
    return(
        <View>
        <View style={styles.container}>  
        <Image
        style={styles.image}
        source={{ uri:"https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" }}
        PlaceholderContent={<ActivityIndicator/>}
        />
        </View>

        <Text style={styles.text}>Newest</Text>
     

        <View style={styles.items}>
        <TouchableOpacity onPress={() => navigation.navigate('behaviour1')}><Article  text={"Agression in Cats"}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('behaviour2')}><Article  text={"Litter Box Problems"}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('behaviour3')}><Article  text={"Meowing and Yowling"}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('behaviour4')}><Article  text={"Cat Toys"}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('behaviour5')}><Article  text={"Enriching Your Cat"}/></TouchableOpacity> 
        </View>
       

        
        </View>
      
        
        
      )
}





export default Home;

const styles = StyleSheet.create({
   
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
      fontSize: 20,
      fontWeight: 'bold',
      margin: 3,
      paddingLeft: 10
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:20,
      paddingHorizontal: 20
    },
    premium : {
      paddingTop: 5,
      paddingLeft: 10,
      backgroundcolor: '#EBEAED'
    },
    image: {
      width: 350,
      height: 250,
      borderRadius: 20,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    items:{
      marginTop: 7
    },
   
  });
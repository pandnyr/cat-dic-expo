import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';


import Article from './components/article';
import Placeholder from './components/placeholder';



function Behaviours({navigation}){

   
  
    return(
      <ScrollView>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
        Cat Behaviours
        </Text>

        <View style={styles.items}>
          {/*behaviours section*/}
          <TouchableOpacity onPress={() => navigation.navigate('behaviour1')}><Article  text={"Agression in Cats"}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('behaviour2')}><Article text={'Litter Box Problems'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('behaviour3')}><Article text={'Meowing and Yowling'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('behaviour4')}><Article text={'Cat Toys'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('behaviour5')}><Article text={'Enriching Your Cat'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('behaviour6')}><Article text={'Rubbing'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('behaviour7')}><Article text={'Chattering'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('behaviour8')}><Article text={'Bring You "Gifts"'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('behaviour9')}><Article text={'Feline Kneading'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('behaviour10')}><Article text={'Cat Eyes'}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('behaviour11')}><Article text={'Rolling Around'}/></TouchableOpacity>
          <Placeholder text={''}/>
          
        
        </View>
        
      </View>
      </ScrollView>
    )
  }

  export default Behaviours;

  const styles = StyleSheet.create({
    body:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#EBEAED',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    },
    tasksWrapper: {
      paddingTop:20,
      paddingHorizontal: 20,
      justifyContent: 'center' //gerek olmayabilir.
      
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center'
    },
    items: {
      marginTop: 24

    }

  });
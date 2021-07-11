import React from 'react';
import { StyleSheet, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-elements';

import Behaviours from './Behaviours';
import Home from './Home';

import Donation from './Donation';

import Donateicon from './icons/Donate';
import Homeicon from './icons/Homeicon';
import Pawprinticon from './icons/Pawprinticon';


import behaviour1 from './Behaviourss/behaviour1';
import behaviour2 from './Behaviourss/behaviour2';
import behaviour3 from './Behaviourss/behaviour3';
import behaviour4 from './Behaviourss/behaviour4';
import behaviour5 from './Behaviourss/behaviour5';
import behaviour6 from './Behaviourss/behaviour6';
import behaviour7 from './Behaviourss/behaviour7';
import behaviour8 from './Behaviourss/behaviour8';
import behaviour9 from './Behaviourss/behaviour9';
import behaviour10 from './Behaviourss/behaviour10';
import behaviour11 from './Behaviourss/behaviour11';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();



function Stack({navigation}){
  return(
    <HomeStack.Navigator screenOptions={{
      headerStyle: {},
    }}
    >
      <HomeStack.Screen name="Home" component={Home} options={{
      
        title: 'Cat-Dic',
        headerRight: () => (
        
          <Button type="clear" title={"Donate"} icon={Donateicon} onPress={() => navigation.navigate('Donation')}
          options={{
            alignItems:"center",
            justifyContent:"center",
          }}
          />
        ), // Navigate etmeden önce homestack.screen kısmına sayfanın çıktısı yazılmalı
      }}/>
      <HomeStack.Screen name="Donation" component={Donation}/>
      <HomeStack.Screen name="behaviour1" component={behaviour1} options={{ title: 'Agression in Cats'}}/>
      <HomeStack.Screen name="behaviour2" component={behaviour2} options={{ title: 'Litter Box Problems'}}/>
      <HomeStack.Screen name="behaviour3" component={behaviour3} options={{ title: 'Meowing and Yowling'}}/>
      <HomeStack.Screen name="behaviour4" component={behaviour4} options={{ title: 'Cat Toys'}}/>
      <HomeStack.Screen name="behaviour5" component={behaviour5} options={{ title: 'Enriching Your Cat'}}/>
      <HomeStack.Screen name="behaviour6" component={behaviour6} options={{ title: 'Rubbing'}}/>
      <HomeStack.Screen name="behaviour7" component={behaviour7} options={{ title: 'Chattering'}}/>
      <HomeStack.Screen name="behaviour8" component={behaviour8} options={{ title: 'Bring You "Gifts"'}}/>
      <HomeStack.Screen name="behaviour9" component={behaviour9} options={{ title: 'Feline Kneading'}}/>
      <HomeStack.Screen name="behaviour10" component={behaviour10} options={{ title: 'Cat Eyes'}}/>
      <HomeStack.Screen name="behaviour11" component={behaviour11} options={{ title: 'Rolling Around'}}/>
    </HomeStack.Navigator>
  )
}


function App(){
  return(
    
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style:{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 30,
          marginHorizontal: 20,
          height: 50,
          borderRadius: 10,
          shadowRadius: 7,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowOffset: {
            width: 10,
            height: 10
          } 
        }
      }}>
        <Tab.Screen name = "Home" component={Stack} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: 'absolute'
            }}>
              <Homeicon name="Home" size={20}/>
            </View>
          )
        }}/>
        <Tab.Screen name = "Behaviours" component={Behaviours} options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              position: 'absolute'
            }}>
             <Pawprinticon name="Behaviours" size={20}/>
            </View>
          )
        }}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  
  )
}

export default App;



// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Again!</Text>
      
//       <Button
//         title="press"
//         color="#ebd834"
//       />
    
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '##EBEAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
  header: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    marginLeft: 10
  }
});

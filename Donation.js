import {View, Text} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';

function Donation(){

    return(
      <View style={styles.container}>
        <Text style={styles.text}>
        The Construction Phase
        </Text>
      </View>
    )
  }

export default Donation;

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
      alignItems: 'center'
    }
  });
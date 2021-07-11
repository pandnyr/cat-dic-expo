import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const Placeholder = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#EBEAED",
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 70,
          
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemText:{
        maxWidth: '80%',
        marginLeft: 15,
        fontWeight: 'bold'
    },
   

});

export default Placeholder;
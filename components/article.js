import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Staricon from '../icons/Staricon'

const Article = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Staricon size={24} style={styles.paw}/>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowRadius: 7,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowOffset: {
            width: 10,
            height: 10
          } 
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
    circular:{
        width: 12,
        height: 12,
        borderColor: '#e6cd43',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#e6cd43'
    },
    paw:{
        width: 24,
        height: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    }

});

export default Article;
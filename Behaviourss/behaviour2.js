import {View, Text} from 'react-native';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';


function behaviour2(){

    return(
      <ScrollView>
        <View>
      <View style={styles.container}>
        <Image
        style={styles.image}
        source={{uri:"https://cdn.shopify.com/s/files/1/1114/1246/products/Luuup_Cat_Litter_Box.003_285df827-7524-4088-87fe-929ba4325f1b_620x.jpeg?v=1551067618"}}
        PlaceholderContent={<ActivityIndicator/>}
       />
       </View>

      <Text style={styles.title}>
        Litter Box Problems
      </Text>


        <View>
          <Text style={styles.parag}>
          If your cat isn’t comfortable with her litter box or can’t easily access it, she probably won’t use it. The following common litter-box problems might cause her to eliminate outside of her box:
          <FlatList
        data={[
          {key: 'You haven’t cleaned your cat’s litter box often or thoroughly enough.'},
          {key: 'You haven’t provided enough litter boxes for your household. Be sure to have a litter box for each of your cats, as well as one extra.'},
          {key: 'Your cat’s litter box is too small for her.'},
          {key: 'Your cat can’t easily get to her litter box at all times.'},
          {key: 'Your cat’s litter box has a hood or liner that makes her uncomfortable.'},
          {key: 'The litter in your cat’s box is too deep. Cats usually prefer one to two inches of litter.'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
          </Text>
        </View>
      </View>


      </ScrollView>
    )
  }

export default behaviour2;

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
    marginBottom: 10
  },
  item: {
    fontSize: 14,
    paddingTop: 7,
    marginHorizontal: 7,
    marginBottom: 7
  },
});


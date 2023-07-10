import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Item from '../components/Item';

function Fridge({navigation}) {
  const data = [
    {name: '하늘보리', date: '2024-05-23'},
    {name: '구운계란', date: '2023-07-11'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        style={{marginBottom: 10}}
      />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('AddItem')}>
        <Image source={require('../assets/add.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36C1B9',
    borderRadius: 100,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
  },
});

export default Fridge;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Item from '../components/Item';
import axios from 'axios';

function Fridge({navigation}) {
  // const [items, setItems] = useState([]);
  const [item, setItem] = useState({
    name: '',
    date: '',
    quantity: 0,
    category: '',
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:8000/api');
        console.log(response.data);
        setItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });

  // useEffect(() => {
  //   try {
  //     fetch('http://localhost:8080/api')
  //       .then(response => response.json)
  //       .then(data => console.log(data.message));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>{item}</Text>
      {/* <FlatList data={data} renderItem={({item}) => <Item item={item} />} /> */}
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

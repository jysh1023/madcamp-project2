import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Item = () => {
  const [itemName, setItemName] = useState('');
  const [itemDate, setItemDate] = useState('');
  const [itemState, setItemState] = useState('');
  const [itemIcon, setItemIcon] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/temp_icon')} />
      </View>
      <View>
        <Text value={itemName} />
        <Text value={itemDate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 350,
    flex: 1,
  },
  iconContainer: {
    backgroundColor: '#36c1b9',
    borderRadius: 0.5,
  },
  imageStyle: {
    height: 46,
    width: 46,
  },
});

export default Item;

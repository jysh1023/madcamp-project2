import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const AddItemDetails = ({navigation}) => {
  const [itemName, setItemName] = useState('');
  const [itemDate, setItemDate] = useState('');
  const [itemCategory, setItemCategory] = useState('');

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#8e93a1'}}>식재료</Text>
        <TextInput
          style={styles.itemInput}
          value={itemName}
          onChangeText={text => setItemName(text)}
          autoComplete="off"
          m
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#8e93a1'}}>유통기한</Text>
        <TextInput
          style={styles.itemInput}
          value={itemDate}
          onChangeText={text => setItemDate(text)}
          autoComplete="off"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#8e93a1'}}>분류</Text>
        <TextInput
          style={styles.itemInput}
          value={itemCategory}
          onChangeText={text => setItemCategory(text)}
          autoComplete="off"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemInput: {
    borderBottomWidth: 0.5,
    height: 48,
    borderBottomColor: '#8e93a1',
    marginBottom: 30,
  },
});

export default AddItemDetails;

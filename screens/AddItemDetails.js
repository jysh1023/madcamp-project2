/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Modal} from 'react-native';
import ReactNativeModalDateTimePickerProps from 'react-native-modal-datetime-picker';

const AddItemDetails = ({navigation}) => {
  const [itemName, setItemName] = useState('');
  const [itemDate, setItemDate] = useState(new Date());
  const [itemCategory, setItemCategory] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = ({date}) => {
    setItemDate(date);
    hideDatePicker();
  };

  const submitItem = data => {};

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#8e93a1'}}>식재료</Text>
        <TextInput
          style={styles.itemInput}
          value={itemName}
          onChangeText={text => setItemName(text)}
          autoComplete="off"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#8e93a1'}}>유통기한</Text>
        <TextInput
          style={styles.itemInput}
          value={itemDate}
          onPress={showDatePicker}
          autoComplete="off"
          keyboardType="numeric"
          placeholder="예: 2023-07-10"
        />
        <ReactNativeModalDateTimePickerProps
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#8e93a1'}}>분류</Text>
        <TextInput
          style={styles.itemInput}
          value={itemCategory}
          ongPress={showDatePicker}
          autoComplete="off"
        />
      </View>

      <View>
        <Button title="취소" />
        <Button title="확인" onPress={submitItem} />
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
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default AddItemDetails;

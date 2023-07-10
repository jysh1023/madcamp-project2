import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function Recipe() {
  const data = [
    {name: '하늘보리', date: '2024-05-23'},
    {name: '구운계란', date: '2023-07-11'},
  ];

  const selectedData = [];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(data.name);
  const [items, setItems] = useState(data);

  return (
    <View style={styles.container}>
      {/* <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        min={0}
        max={5}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Recipe;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

function Fridge({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Fridge Screen</Text>
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
  },
  buttonStyle: {
    position: 'fixed',
    buttom: 0,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36C1B9',
    borderRadius: 100,
  },
});

export default Fridge;

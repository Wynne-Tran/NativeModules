import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import {NativeModules, Button} from 'react-native';


const App = () => {
  const [number, setNumber] = useState('');
  const onPress = (num: any) => {
    const {C_to_RN} = NativeModules;
    if (parseInt(num)) {
      C_to_RN.WrapFactorial(parseInt(num), (_err, res) => console.log(res));
    } else {
      Alert.alert('Please enter a digit');
    }
  };
  return (
    <View style={styles.container}>
      <Text> Practice !</Text>
      <TextInput
        style={{width: '50%', height: 40, borderBottomColor: 'black'}}
        onChangeText={e => setNumber(e)}
        value={number}
        placeholder={'Input here'}
      />
      <Button
        title="C to React Native"
        color="#841584"
        onPress={() => onPress(number)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;

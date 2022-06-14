import React from 'react';
import {StyleSheet, Text, View, NativeModules, Button} from 'react-native';

const App = () => {
  const onPress = () => {
    const {SendCpp_to_RN} = NativeModules;
    SendCpp_to_RN.fromCpp((_err, res) => console.log(res));
  };
  return (
    <View style={styles.container}>
      <Text> Practice !</Text>
      <Button title="C++ to React Native" color="#841584" onPress={onPress} />
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

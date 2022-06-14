import React from 'react';
import {StyleSheet, Text, View, NativeModules, Button} from 'react-native';

const App = () => {
  const onPress = () => {
    const {SampleClass} = NativeModules;
    SampleClass.sayHello((_err, res) => console.log(res));
  };
  return (
    <View style={styles.container}>
      <Text> Practice !</Text>
      <Button
        title="Objective C to React Native"
        color="#841584"
        onPress={onPress}
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

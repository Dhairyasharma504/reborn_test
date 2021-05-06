import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.image}>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  image: {marginTop: 70},
});
export default App;

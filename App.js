import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View><Text>Almoço </Text></View>
      <View>
        <View><Text>Segunda</Text></View>
      </View>
      <View>
        <Text>Prato 1: test</Text>
        <Text>Prato 1: test2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

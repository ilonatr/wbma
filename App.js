/* eslint-disable no-unused-vars */
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import List from './components/List';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <List />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
  },
  list_items: {
    backgroundColor: 'lightgrey',
    padding: 15,
    margin: 3,
  },
  items_sidetoside: {
    flexDirection: 'row',
  },

});

export default App;

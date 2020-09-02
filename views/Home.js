import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import List from '../components/List';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{width: 340, height: 200, justifyContent: 'center'}}
          resizeMode='contain'
          source={{uri: 'http://placekitten.com/400/202'}}
        />
        <Text style={styles.header_text}>
          Homeless cats
        </Text>
      </View>
      <StatusBar style={{backgroundColor: 'cream'}}></StatusBar>
      <List />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list_items: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 3,
  },
  items_sidetoside: {
    flexDirection: 'row',
  },
  header_text: {
    fontSize: 20,
    color: '#964B00',
    position: 'absolute',
    top: 40,
    backgroundColor: '#F5F5DC',
  },
});

export default Home;

/* eslint-disable no-unused-vars */
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';

const Home = (props) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={{backgroundColor: 'cream'}}></StatusBar>
      <List navigation={navigation}></List>
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

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;

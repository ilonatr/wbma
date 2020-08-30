/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';


const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.row}>
      <Image
        style={styles.image}
        source={{uri: props.singleMedia.thumbnails.w160}}
      />
      <SafeAreaView style={styles.text}>
        <Text style={styles.title}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    maxWidth: '100%',
    height: 300,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    marginBottom: 5,
  },
  image: {
    width: '50%',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
  },
  text: {
    maxWidth: '50%',
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'lightgrey',
    paddingRight: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },

});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;

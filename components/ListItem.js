/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.list_items}>
      <View style={styles.items_sidetoside}>
        <Image style={{width: 150, height: 150, borderRadius: 100, marginRight: 20}}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
        <View style={styles.text}>
          <Text
            style={styles.title}>{props.singleMedia.title}</Text>
          <Text
            style={{textAlign: 'left', width: 180}}>{props.singleMedia.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list_items: {
    backgroundColor: 'lightgrey',
    padding: 20,
    margin: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
  },
  items_sidetoside: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: 'brown',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;

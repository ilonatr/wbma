/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.list_items}>
      <View style={styles.items_sidetoside}>
        <Image style={{width: 150, height: 150, borderRadius: 100}}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
        <View style={styles.text}>
          <Text
            style={styles.header}>{props.singleMedia.title}</Text>
          <Text
            style={{textAlign: 'left', width: 180}}>{props.singleMedia.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list_items: {
    backgroundColor: '#D4D4D4',
    padding: 15,
    margin: 3,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
  },
  items_sidetoside: {
    flexDirection: 'row',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#E394CE',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;

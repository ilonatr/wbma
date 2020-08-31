/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.list_items}>
      <View style={styles.items_sidetoside}>
        <Image style={{width: 150, height: 150, borderRadius: 100, marginRight: 20}}
          source={{uri: mediaUrl + props.singleMedia.thumbnails.w160}}
        />
        <View style={styles.text}>
          <Text
            style={styles.title}>{props.singleMedia.title}</Text>
          <Text
            style={{textAlign: 'left', width: 500, flexWrap: 'wrap'}}>{props.singleMedia.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list_items: {
    backgroundColor: '#F5F5DC',
    padding: 20,
    margin: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#964B00',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  items_sidetoside: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#964B00',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;

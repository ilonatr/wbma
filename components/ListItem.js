/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = ({navigation, singleMedia}) => {
  return (
    <TouchableOpacity style={styles.list_items}
      onPress={
        () => {
          navigation.navigate('Single', {file: singleMedia});
        }
      }>
      <View style={styles.items_sidetoside}>
        <Image style={styles.image}
          source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
        />
        <View style={styles.text}>
          <Text
            style={styles.title}>{singleMedia.title}</Text>
          <Text>{singleMedia.description}</Text>
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
    shadowColor: 'brown',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  items_sidetoside: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#964B00',
  },
  text: {
    flex: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 20,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;

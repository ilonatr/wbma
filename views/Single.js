import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View} from 'react-native';
import PropTypes from 'prop-types';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = ({route}) => {
  console.log('route', route);
  const {file} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagebox}>
        <Image style={styles.image} source={{uri: mediaUrl + file.filename}} />
        <Text style={styles.title} >{file.title}</Text>
        <Text>{file.description}</Text>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  description: {
    padding: 10,
    alignItems: 'center',
  },
  imagebox: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;

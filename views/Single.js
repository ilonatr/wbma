import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import PropTypes from 'prop-types';


const Single = ({route}) => {
  console.log('route', route);
  const {file} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: file.filename}} />
      <Text>{file.title}</Text>
      <Text>{file.description}</Text>

    </SafeAreaView>
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

  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const LearnMore = (props) => {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>
        Earn A Free Good Deed {'\n'}
        Inshallah
      </Text>
      <Image
        style={styles.movie}
        source={require('../public/watching-movie-compressed.png')}
      />
      <TouchableOpacity
        onPress={() => {
          props.setModalVisible(false);
        }}
        style={styles.goBack}
      >
        <Text style={styles.goBack}>X</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LearnMore;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#9BD6EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  movie: {
    position: 'absolute',
    width: 250,
    height: 250,
    left: 0,
    top: 100,
    marginTop: 100,
  },
  goBack: {
    top: 25,
    right: 20,
    fontSize: 20,
    position: 'absolute',
  },
  title: {
    top: 100,
    position: 'absolute',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

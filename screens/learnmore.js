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
        style={styles.goBackTouchable}
      >
        <Image
          style={styles.goBackView}
          source={require('../public/incorrect-button-compressed.png')}
        />
      </TouchableOpacity>
      <Text style={styles.textTitle}>- How does it work?</Text>
      <Text style={styles.textDescription}>
        By clicking on the "Sevap" (Turkish for Good Deed) button, you
        will receive an ad that you can watch.
        {'\n'}
        {'\n'}
        For every ad watched, we receive a small payment & use a part of it to
        donate to charity.
        {'\n'}
        {'\n'}
        The rest will be spent on marketing to spread the word and help out more
        of our brothers & sisters, and also pay for the maintanenance and costs
        of our servers etc.
      </Text>
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
    fontSize: 20,
    position: 'absolute',
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
    right: 6.5,
  },
  goBackTouchable: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
  goBackView: {
    top: 30,
    right: 15,
    position: 'absolute',
    width: 25,
    height: 25,
  },
  title: {
    top: 100,
    position: 'absolute',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textTitle: {
    position: 'absolute',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 25,
    left: 0,
    top: 450,
  },
  textDescription: {
    position: 'absolute',
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 17,
    padding: 25,
    bottom: 150,
  },
  cloud: {
    position: 'absolute',
    width: 600,
    height: 150,
    bottom: 0,
    right: -100,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { AdMobInterstitial } from 'expo-ads-admob';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import LearnMore from './learnmore';

const SevapButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const interstital = async () => {
    await AdMobInterstitial.setAdUnitID(
      'ca-app-pub-3940256099942544/1033173712'
    ); // Test ID, Replace with your-admob-unit-id
    try {
      await AdMobInterstitial.getIsReadyAsync();
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.background}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <LearnMore setModalVisible={setModalVisible} />
      </Modal>
      <Image
        style={styles.mosque}
        source={require('../public/mosque-blue-compressed.png')}
      />
      <Image
        style={styles.donate}
        source={require('../public/charity-box-compressed.png')}
      />
      <View style={styles.hadithPosition}>
        <Text style={styles.hadithTitle}>The Prophet ﷺ said:</Text>
        <Text style={styles.hadith}>
          {'\n'}
          {'\n'}
          {'\n'}
          “The believer’s shade on the Day of Resurrection will be his charity.”
          (Al-Tirmidhi)
          {'\n'}
          {'\n'}
          “Protect yourself from hell-fire even by giving a piece of date as
          charity.” (Al-Bukhari and Muslim)
        </Text>
      </View>
      <View style={styles.backgroundContainer}>
        <TouchableOpacity
          onPress={() => {
            interstital();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sevap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#9BD6EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 20,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    top: 225,
    height: 50,
    width: 120,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '200',
  },
  mosque: {
    position: 'absolute',
    width: 308,
    height: 386,
    top: 50,
  },
  donate: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: 300,
    right: 30,
  },
  hadithPosition: {
    width: 400,
    marginTop: 25,
  },
  hadithTitle: {
    position: 'absolute',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  hadith: {
    position: 'absolute',
    color: '#FFFFFF',
    fontSize: 16.5,
  },
  cloud: {
    position: 'absolute',
    width: 600,
    height: 150,
    bottom: 0,
    right: -100,
  },
});

export default SevapButton;

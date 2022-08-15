import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';

const Hadithoftheday = (props) => {
  const [result, setResult] = useState(false);

  async function getHadith() {
    let data = await fetch('https://hadithnourislamapi.herokuapp.com/hadith');
    let result = await data.json();

    setResult(result);
  }

  useEffect(() => {
    getHadith();
  }, []);

  return (
    <View style={styles.background}>
      <Image style={styles.mosque} source={require('../public/masjid.png')} />
      <TouchableOpacity
        onPress={() => {
          props.modal(false);
        }}
        style={styles.goBackTouchable}
      >
        <Image
          style={styles.goBackView}
          source={require('../public/incorrect-button-compressed.png')}
        />
      </TouchableOpacity>
      <View style={styles.hadithPosition}>
        {result ? (
          <View>
            <Text style={styles.hadithTitle}>{result.narrator}:</Text>
            <Text style={styles.hadith}>
              {'\n'}
              {'\n'}
              {'\n'}
              {result.text}
            </Text>
            <Text style={styles.hadithReference}>
              {'\n'}
              {'\n'}
              {result.reference}
            </Text>
          </View>
        ) : (
          <Text> </Text>
        )}
      </View>
    </View>
  );
};

export default Hadithoftheday;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#e9d5cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackView: {
    top: 30,
    right: 15,
    position: 'absolute',
    width: 25,
    height: 25,
  },
  goBackTouchable: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
  mosque: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    top: '10%',
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
  hadithPosition: {
    width: 400,
    marginTop: -50,
  },
  hadithReference: {
    bottom: -175,
    color: 'white',
    fontSize: 13.5,
  },
});

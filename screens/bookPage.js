import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import Sura from '../components/sura';
import Data from '../data/data';
import englishTranslation from '../data/english';

const bookPage = (props) => {
  const [listView, setListView] = useState(true);
  const [ayahData, setAyahData] = useState([]);
  const [sound, setSound] = useState(null);
  const [number, setNumber] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function playSound(soundURL) {
    const { sound } = await Audio.Sound.createAsync({
      uri: soundURL,
    });
    setSound(sound);

    await sound.playAsync();
  }

  return (
    <View style={styles.background}>
      <View
        style={{ flex: 0.47, justifyContent: 'center', alignItems: 'center' }}
      >
        <Image style={styles.image} source={require('../public/read.png')} />
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
      </View>
      <View style={{ flex: 0.55 }}>
        <ScrollView
          style={styles.list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {listView
            ? Data.data.surahs.map((el, i) => {
                return (
                  <Sura
                    setAyahData={setAyahData}
                    listView={setListView}
                    ayahs={el.ayahs}
                    setNumber={setNumber}
                    number={el.number}
                    title={`${el.number}.  ${el.englishName}`}
                    arabic={`${el.name}`}
                    key={i}
                  />
                );
              })
            : ayahData[0].map((el, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      playSound(el.audio);
                    }}
                    key={i}
                    style={styles.ayahText}
                  >
                    <View>
                      <Text>
                        <Text style={styles.number}>{el.number}</Text>
                        {'\n'}
                        {'\n'}
                        <Text style={styles.arabic}>{el.text}</Text>
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.english}>
                        {
                          englishTranslation.data.surahs[number - 1].ayahs[i]
                            .text
                        }
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
        </ScrollView>
      </View>
    </View>
  );
};

export default bookPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#3f1f7e',
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
    right: '-50%',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '75%',
  },
  list: {
    width: '100%',
    height: '100%',
  },
  ayahText: {
    width: '100%',
    height: 150,
    marginBottom: 25,
    backgroundColor: '#2a195b',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  arabic: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  number: {
    color: 'white',
    marginLeft: 25,
    marginTop: 25,
    fontSize: 20,
    fontWeight: '100',
  },
  english: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

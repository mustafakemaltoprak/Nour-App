import { View, StyleSheet, ScrollView, Modal, Text } from 'react-native';
import React, { useState } from 'react';
import AppListItem from '../components/appListItem';
import SevapButton from './sevapmodal';
import Hadithoftheday from './hadithoftheday';
import BookPage from './bookPage'

export default function Applist({navigation}) {
  const [hadithOfTheDay, setHadithOfTheDay] = useState(false);
  const [bookPage, setBookPage] = useState(false);

  return (
    <View style={styles.background}>
      <View style={styles.listHolder}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={hadithOfTheDay}
          onRequestClose={() => {
            setHadithOfTheDay(false);
          }}
        >
          <Hadithoftheday modal={setHadithOfTheDay}/>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={bookPage}
          onRequestClose={() => {
            setBookPage(false);
          }}
        >
          <BookPage modal={setBookPage}/>
        </Modal>
        <ScrollView
          style={styles.list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <AppListItem
            path={require('../public/sevap-compressed.png')}
            title={'Free Good Deed'}
            navigation={navigation}
          />
          <AppListItem
            path={require('../public/hadith-compressed.png')}
            title={'Hadith of The Day'}
            modal={setHadithOfTheDay}
          />
          <AppListItem
            path={require('../public/book-compressed.png')}
            title={'Quran'}
            modal={setBookPage}
          />
          <AppListItem
            path={require('../public/leader-compress.png')}
            title={'Trivia'}
          />
          <AppListItem
            path={require('../public/praying-compressed.png')}
            title={'Prayer'}
          />
          <AppListItem
            path={require('../public/map-compressed.png')}
            title={'Qibla Direction'}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#9BD6EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHolder: {
    top: -30,
    height: 625,
    width: 350,
  },
  cloud: {
    position: 'absolute',
    width: 600,
    height: 150,
    bottom: 0,
    right: -100,
  },
});

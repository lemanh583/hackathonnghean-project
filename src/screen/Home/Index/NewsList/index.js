import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {GoToButton} from '../UrgentList';
import {COLOR_BLACK, COLOR_PRIMARY} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

function NewsList({list}) {
  const navigation = useNavigation();
  return list && list.length ? (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text h2 style={[styles.blackText, {fontWeight: '600'}]}>
          Tin tức
        </Text>
        <GoToButton screenName="News" buttonName="Chi tiết" />
      </View>
      {list.map(e => (
        <TouchableOpacity
          key={e.id}
          style={styles.item}
          onPress={() => navigation.navigate('NewsDetail', {id: e.id})}>
          <Image style={styles.img} source={{uri: e.imgUrl}} />
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.text,
                styles.blackText,
                {fontWeight: '600', marginBottom: 5},
              ]}>
              {e.title}
            </Text>
            <Text style={[styles.text, styles.blackText, {marginBottom: 5}]}>
              {e.descriptions}
            </Text>
            <Text style={styles.mutedText}>{e.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  ) : null;
}

export default NewsList;

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
  },
  blackText: {
    color: COLOR_BLACK,
  },
  redText: {
    color: COLOR_PRIMARY,
  },
  mutedText: {
    color: '#BEBEBE',
    fontSize: 10,
  },
  item: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 10,
    resizeMode: 'cover',
  },
});

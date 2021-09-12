import * as React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {COLOR_BLACK, COLOR_PRIMARY} from '~/constants';
import {useNavigation} from '@react-navigation/native';
export default function Item({id, imgUrl, time, title, description, onPress}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={id}
      style={styles.item}
      onPress={()=> navigation.navigate(onPress.name, {id: onPress.id})}
      >
      <Image style={styles.img} source={{uri: imgUrl}} />
      <View style={{flex: 1}}>
        <Text
          style={[
            styles.text,
            styles.blackText,
            {fontWeight: '600', marginBottom: 5},
          ]}>
          {title}
        </Text>
        <Text style={[styles.text, styles.blackText, {marginBottom: 5}]}>
          {description}
        </Text>
        <Text style={styles.mutedText}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
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
  },
});

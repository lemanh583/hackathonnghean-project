import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLOR_BLACK, COLOR_PRIMARY} from '../../../../constants';

export function GoToButton({screenName, buttonName}) {
  const navigation = useNavigation();

  return (
    <Text
      style={[styles.text, styles.redText]}
      onPress={() => navigation.navigate(screenName)}>
      {buttonName}
    </Text>
  );
}
function UrgentList({list}) {
  const navigation = useNavigation();
  return list && list.length ? (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text h2 style={[styles.blackText, {fontWeight: '600'}]}>
          Cần máu khẩn cấp
        </Text>
        <GoToButton screenName="Urgent" buttonName="Chi tiết" />
      </View>
      <View>
        {list.map((e, i) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('UrgentDetail', {id: e.id})}
            key={e.id}
            style={[
              styles.item,
              {backgroundColor: i % 2 === 0 ? '#FBFBFB' : 'white'},
            ]}>
            <Text>
              <View style={styles.number}>
                <Text>{i + 1}</Text>
              </View>
              <View>
                <Text style={[styles.text, styles.blackText]}>{e.name}</Text>
              </View>
            </Text>
            <Text style={[styles.bloodType, styles.text, styles.redText]}>
              {e.bloodType}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  ) : null;
}

export default UrgentList;

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
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  number: {
    width: 20,
    marginRight: 10,
  },
  bloodType: {
    textAlign: 'right',
  },
});

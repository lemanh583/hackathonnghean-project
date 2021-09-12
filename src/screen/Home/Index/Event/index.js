import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_PRIMARY} from '../../../../constants';
import Carousel from './Carousel';
import { GoToButton } from '../UrgentList';

const Event = ({list}) => (
  <View style={styles.root}>
    <View style={styles.header}>
      <Text h2 style={[styles.blackText, {fontWeight: '600'}]}>
        Sự kiện hiến máu
      </Text>
      <GoToButton screenName='Urgent' buttonName='Xem thêm'/>
    </View>
    <Carousel data={list} />
  </View>
);

export default Event;

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
});

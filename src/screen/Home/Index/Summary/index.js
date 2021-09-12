import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {COLOR_PRIMARY, COLOR_BORDER} from '../../../../constants/index';

const Summary = ({province, donator, bloodUnit}) => (
  <View style={styles.root}>
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={require('../../../../assets/image/world.png')}
      />
      <Text style={styles.text}>
        <Text style={styles.redText}>{province}</Text> tỉnh thành
      </Text>
    </View>
    <View style={styles.divider} />
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={require('../../../../assets/image/blooddonation.png')}
      />
      <Text style={styles.text}>
        <Text style={styles.redText}>{donator}</Text> tình nguyện viên
      </Text>
    </View>
    <View style={styles.divider} />
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={require('../../../../assets/image/blood.png')}
      />
      <Text style={styles.text}>
        <Text style={styles.redText}>{bloodUnit}</Text> đơn vị máu
      </Text>
    </View>
  </View>
);

export default Summary;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FBFBFB',
    width: '100%',
    height: 93,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    marginTop: 10,
  },
  redText: {
    color: COLOR_PRIMARY,
  },
  img: {
    height: 50,
    width: 50,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: COLOR_BORDER,
  },
});

import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLOR_PRIMARY, IS_IPHONE_X} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import IconBack from '~/assets/icon/icon-back.svg';

export default function AppHeader({title, srcImg, display}) {
  const navigation = useNavigation();

  return (
    <View style={styles.viewHeader}>
      <IconBack
        style={[styles.iconBack, display]}
        width={20}
        height={22}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.txtHeader}>{title}</Text>
      {srcImg && (
        <TouchableOpacity >
          <Image source={srcImg} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',
    // height: 75,
    alignItems: 'center',
    backgroundColor: COLOR_PRIMARY,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    // paddingLeft: 20,
    paddingTop: IS_IPHONE_X ? 30 : 25,
    justifyContent: 'space-between'
  },
  txtHeader: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  iconBack: {
    color: '#FFF',
    // position: 'absolute',
    // top: 32.75,
    // left: 22.5,
  },
});

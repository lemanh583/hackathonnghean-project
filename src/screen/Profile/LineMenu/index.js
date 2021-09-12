import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const LineMenu = ({txtSetting}) => {
  return (
    <View style={styles.settingMenu}>
      <View>
        <Text style={styles.txtSettingMenu}>{txtSetting}</Text>
      </View>
      <View>
        <Image source={require('~/assets/image/arrow_setting.png')} />
      </View>
    </View>
  );
};

export default LineMenu;

const styles = StyleSheet.create({
  settingMenu: {
    height: 40,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  txtSettingMenu: {
    fontWeight: '400',
    fontSize: 12,
  },
});

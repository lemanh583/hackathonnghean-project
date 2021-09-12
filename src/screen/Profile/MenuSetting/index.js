import React from 'react';
import {View, StyleSheet, Text,  TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LineMenu from '../LineMenu';
const MenuSetting = () => {
  const navigation = useNavigation()
  const dataMenu = [
    {
      id: 1,
      titleSetting: null,
      settingMenu: [
        {title:  'Nhật ký hiến máu',  link: ''},
        {title:   'Settings', link: ''},
      ],
    },
    {
      id: 2,
      titleSetting: 'Bệnh viện thành phố',
      settingMenu: [
        {title: 'Tạo hiến máu khẩn cấp', link: 'CreateUrgent'},
        {title: 'Tạo sự kiện hiến máu', link: ''},
        {title: 'Viết tin tức', link: ''},
        {title: 'Quản lý', link: ''},
      ],
    },
  ];

  return dataMenu.map(data => {
    return (
      <View style={styles.partMenu} key={data.id}>
        {data.titleSetting != null && (
          <View>
            <Text style={styles.txtTitleSetting}>{data.titleSetting}</Text>
          </View>
        )}
        {data.settingMenu.map((Setting, index) => {
          return (
            <View key={index}>
              <TouchableOpacity onPress={() =>navigation.navigate(Setting.link)}>
                <LineMenu txtSetting={Setting.title}/>
              </TouchableOpacity>

              {Setting.title != data.settingMenu[data.settingMenu.length - 1].title && (
                <View style={styles.lineSetting}></View>
              )}

            </View>
          );
        })}
      </View>
    );
  });
};
export default MenuSetting;

const styles = StyleSheet.create({

  lineSetting: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
  txtTitleSetting: {
    fontWeight: '600',
    fontSize: 12,
    marginBottom: 10,
  },
 
  partMenu: {
    marginBottom: 30,
  },
});

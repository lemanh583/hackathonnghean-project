import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '~/component/Header';
import Unorderedlist from 'react-native-unordered-list';
import BottomButton from '../../../component/BottomButton';
import Button from '../../../component/Button';
import { color } from 'react-native-reanimated';

export default function LoginWarning({navigation}) {
  return (
    <View style={styles.main}>
      <AppHeader
        title={'Đăng nhập'}
        srcImg={require(`~/assets/image/Vector.png`)}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Đăng nhập để cập nhật thông tin</Text>
        <View style={styles.unorderedList}>
          <Unorderedlist>
            <Text>
              Nhận thông báo khi có bệnh viện cần máu khẩn cấp ở địa phương bạn
            </Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text>Nhận thông báo khi có sự kiện hiến máu ở địa phương bạn</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text>
              Được ghi nhận khi đi hiến máu ở địa điểm liên kết với app
            </Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text>
              Được bệnh viện địa phương cập nhật các thông tin liên quan
            </Text>
          </Unorderedlist>
        </View>
        <Button title="Đăng nhập ngay" noneBorder 
        onPress = {() => {navigation.navigate('Login')}}
        />
      </ScrollView>
      {/* <BottomButton indexParam={2}/> */}
    </View>
  );
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 10,
    padding: 20,
    flex: 1,
  },
  title: {
    lineHeight: 20,
    marginBottom: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  unorderedList: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 12,
    fontWeight: 'normal',
    color: '#515151',
  },
});

import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '~/component/Header';
import Unorderedlist from 'react-native-unordered-list';
import BottomButton from '../../../component/BottomButton';
import Button from '../../../component/Button';

export default function Register({navigation}) {

  return (
    <View style={styles.main}>
      <AppHeader
        title={'Đăng ký hiến máu'}
        srcImg={require(`~/assets/image/Vector.png`)}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Lưu ý khi đăng ký thông tin qua App</Text>
        <View style={styles.unorderedList}>
          <Unorderedlist>
            <Text>
              Các thông tin cá nhân của bạn chỉ lưu trữ trên máy ở dạng mã hoá
            </Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text>
              Chúng tôi không lưu thông tin của bạn trên server, do đó mỗi lần
              cài lại app phải nhập lại thông tin này
            </Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text>
              Vui lòng chỉ cài app trên 1 thiết bị bạn thường sử dụng nhất
            </Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text>Cảm ơn bạn rất nhiều</Text>
          </Unorderedlist>
        </View>
        <Button title="Tôi đã hiểu" noneBorder onPress={() => {
            navigation.navigate('BloodRegister')
          }}/>
      </ScrollView>
      {/* <BottomButton indexParam={2} /> */}
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

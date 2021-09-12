import React from 'react';
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import AppHeader from '~/component/Header';
import AppTextInput from '~/component/TextInput';
import Button from '~/component/Button';
const Register = ({navigation}) => {
  return (
    <View style={styles.contenner}>
      <AppHeader title="Register" display={{display: 'none'}} />
      <ScrollView style={[styles.viewBody, {padding: 20}]}>
        <AppTextInput title="Email" placeholder="Nhập email" />
        <AppTextInput title="Mật khẩu" placeholder="Nhập mật khẩu" />
        <AppTextInput
          title="Nhập lại mật khẩu"
          placeholder="Nhập lại mật khẩu"
        />
        <Button title="Đăng ký" />
        <Button
          title="Đã có tài khoản? Đăng nhập ngay"
          noneBorder
          onPress={() => navigation.push('Login')}
        />
      </ScrollView>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  contenner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewBody: {
    flex: 1,
  },
});

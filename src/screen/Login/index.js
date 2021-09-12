import * as React from 'react';
import {View, StyleSheet, ScrollView, Image, Alert} from 'react-native';
import AppHeader from '~/component/Header';
import AppTextInput from '~/component/TextInput';
import Button from '~/component/Button';
import BottomButton from '~/component/BottomButton';

export default function Login({navigation}) {
  return (
    <View style={styles.contenner}>
      <AppHeader title="Login" display={{display: 'none'}} />
      <ScrollView style={[styles.viewBody, {padding: 20}]}>
        <AppTextInput title="Email" placeholder="Nhập email" />
        <AppTextInput title="Password" placeholder="Nhập password" forgot />
        <Button
          title="Đăng nhập"
          onPress={() => {
            navigation.navigate('BloodDonationRegister');
          }}
        />
        <Button
          title="Chưa có tài khoản? Đăng ký ngay"
          noneBorder
          onPress={() => navigation.push('Register')}
        />
      </ScrollView>
      {/* <BottomButton /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  contenner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewBody: {
    flex: 1,
  },
});

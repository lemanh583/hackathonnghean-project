import * as React from 'react';
import {View} from 'react-native';
import AppTextInput from '../../component/TextInput';
import RequiredInput from '../../component/RequiredInput';

export default function InfoUser() {
  return (
    <View>
        <RequiredInput title="Họ tên" placeholder="Họ và tên" />
        <RequiredInput title="Số điện thoại" placeholder="Nhập số điện thoại" />
        <AppTextInput title="Địa chỉ" placeholder="Nhập địa chỉ" />
    </View>
  );
}


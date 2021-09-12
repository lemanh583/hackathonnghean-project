import * as React from 'react';
import {View} from 'react-native';
import RadioButton from '~/component/RadioInput';

export default function GenderUser() {
  const data1 = [
    {
      key: 'nam',
      text: 'Nam',
    },
    {
      key: 'nữ',
      text: 'Nữ',
    },
  ];
  return (
    <View>
      <RadioButton arr={data1} title="Giới tính" />
    </View>
  );
}

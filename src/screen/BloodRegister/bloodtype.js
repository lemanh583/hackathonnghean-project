import * as React from 'react';
import {View} from 'react-native';
import RadioButton from '~/component/RadioInput';

export default function BloodTypeUser() {
  const data2 = [
    {
      key: 'A',
      text: 'A',
    },
    {
      key: 'B',
      text: 'B',
    },
    {
      key: 'AB',
      text: 'AB',
    },
    {
      key: 'O',
      text: 'O',
    },
  ];
  return (
    <View style={{ marginBottom: 10, }}>
      <RadioButton arr={data2} title="Nhóm máu" />
    </View>
  );
}

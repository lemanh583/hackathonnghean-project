import * as React from 'react';
import {View} from 'react-native';
import RadioButton from '~/component/RadioInput';

export default function BloodTypeUser2() {
  const data3 = [
    {
      key: 'Rh(D)+',
      text: 'Rh(D)+',
    },
    {
      key: 'Rh(D)-',
      text: 'Rh(D)-',
    },
  ];
  return (
    <View>
      <RadioButton arr={data3} />
    </View>
  );
}

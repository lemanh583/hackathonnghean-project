import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '~/component/Header';
import Button from '~/component/Button';
import BottomButton from '~/component/BottomButton';
import RequiredInput from '../../component/RequiredInput';
import InfoUser from './infoUser';
import GenderUser from './gender';
import BloodTypeUser from './bloodtype';
import BloodTypeUser2 from './bloodtype2';
import { LogBox } from 'react-native';


export default function Register({navigation}) {
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.contenner}>
      
      <AppHeader 
        title={'Đăng ký hiến máu'}
        srcImg={require(`~/assets/image/Vector.png`)}
      />
      <ScrollView style={[styles.viewBody, {padding: 20}]}>
        <InfoUser />

        <GenderUser /> 

        <RequiredInput title="Năm sinh" placeholder="Nhập năm sinh" />

        <BloodTypeUser />

        <BloodTypeUser2 />

        <View style={styles.styeType}>
          <Button
            title="Đăng ký"
            onPress={() => {
              navigation.navigate('BloodRegistered');
            }}
          />
        </View>
      </ScrollView>
      {/* <BottomButton indexParam={2} /> */}
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
  txtTileInput: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: '700',
  },
  styeType: {
    marginBottom: 80,
  },
  
});

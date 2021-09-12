import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Image,
} from 'react-native';
import AppHeader from '~/component/Header';
import SwitchButton from '~/component/SwitchToggle';
import BottomButton from '~/component/BottomButton';
import Button from '~/component/Button';

export default function Registered({navigation}) {
  return (
    <View style={styles.contenner}>
      <AppHeader
        title="Đăng ký hiến máu"
        srcImg={require(`~/assets/image/edit_profile.png`)}
      />
      <ScrollView style={[styles.viewBody, {padding: 20}]}>
        <Text style={styles.nameUser}>Hồ Xuân Dũng</Text>

        <TextInput style={styles.infoUser} multiline></TextInput>

        <View style={styles.viewImg}>
          <Image source={require('~/assets/image/image5.png')} />
          <Image
            style={{marginLeft: 10, marginRight: 10}}
            source={require('~/assets/image/image7.png')}
          />
          <Image source={require('~/assets/image/RH+.png')} />
        </View>

        <View>
          <SwitchButton title="Nhận thông báo hiến máu khẩn cấp"></SwitchButton>
        </View>

        <View style={{marginTop: 20}}>
          <SwitchButton title="Nhận thông báo sự kiện hiến máu"></SwitchButton>
        </View>

        <View style={styles.styeType}>
          <Button
            title="Gỡ đăng ký"
            noneBorder
            onPress={() => {
              navigation.navigate('BloodRegister');
            }}
          />
        </View>
      </ScrollView>
      <BottomButton indexParam={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nameUser: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 20,
  },
  infoUser: {
    fontSize: 12,
    fontWeight: 'normal',
    borderWidth: 2,
    borderColor: '#F0F0F0',
    borderRadius: 5,
    backgroundColor: '#FBFBFB',
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 15,
    paddingRight: 20,
    height: 100,
    textAlignVertical: 'top',
  },
  viewImg: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  viewBody: {
    flex: 1,
  },
  styeType: {
    marginBottom: 50,
  },
});

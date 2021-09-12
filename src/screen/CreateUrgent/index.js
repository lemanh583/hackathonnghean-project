import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TextInput,
} from 'react-native';
import AppHeader from '~/component/Header';
import AppTextInput from '~/component/TextInput';
import Button from '~/component/Button';
import Unorderedlist from 'react-native-unordered-list';

const CreateUrgent = () => {
  return (
    <View style={styles.contenner}>
      <AppHeader
        title="Cần máu khẩn cấp"
        srcImg={require(`~/assets/image/edit_profile.png`)}
        // srcImgArrow={require(`~/assets/image/profile_arrow.png`)}
      />
      <ScrollView style={[styles.viewBody, {padding: 20}]}>
        <AppTextInput title="Đơn vị" placeholder="Đơn vị" />
        <AppTextInput title="Nhóm máu" placeholder="Nhóm máu" />
        <AppTextInput
          title="Lý do"
          placeholder="Lý do"
          heightInput={{height: 95,textAlignVertical: 'top'}}
          multiline
        />
        <Button title="Đăng tin" />

        <View style={{marginTop: 30}}>
          <Text style={styles.title}>Lưu ý khi đăng ký thông tin qua app</Text>
          <View style={styles.unorderedList}>
            <Unorderedlist>
              <Text>
              Hệ thống sẽ tự động gửi thông báo đến những người có nhóm máu phù hợp
              </Text>
            </Unorderedlist>
            <Unorderedlist>
              <Text>
              Nếu có người phản hồi, bạn sẽ nhận được thông tin liên hệ của người đó
              </Text>
            </Unorderedlist>
            <Unorderedlist>
              <Text></Text>
            </Unorderedlist>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateUrgent;

const styles = StyleSheet.create({
  contenner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewBody: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  unorderedList: {
    top: 15,
  },
});

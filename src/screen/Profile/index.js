import React from 'react';
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import AppHeader from '~/component/Header';
import MenuSetting from './MenuSetting';
import Button from '~/component/Button';

const Profile = ({props, navigation}) => {
  return (
    <View style={styles.contenner}>
      <AppHeader
        srcImg={require(`~/assets/image/edit_profile.png`)}
        display={{display: 'none'}}
      />
      <View style={styles.viewBody}>
        {/* Profile header */}

        <View style={styles.headerProfile}>
          <View style={styles.headerCenter}>
            <View>
              <Image
                style={styles.imgUser}
                source={require('~/assets/image/user_img.png')}
              />
              <View>
                <Image
                  style={styles.iconStatus}
                  source={require('~/assets/image/icon_user.png')}
                />
              </View>
            </View>
          </View>

          <View style={styles.headerCenter}>
            <View>
              <Text style={styles.txtUserName}>Hồ Xuân Dũng</Text>
            </View>
          </View>

          <View style={styles.headerCenter}>
            <View>
              <Text style={styles.txtUserStatus}>Thành viên nhiệt tình</Text>
            </View>
          </View>
        </View>

        {/* scrollView setting */}

        <ScrollView>
          <MenuSetting />
          <Button
            title="Đăng xuất"
            noneBorder
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </ScrollView>
      </View>
      {/* <BottomButton indexParam={3} /> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  contenner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewBody: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerProfile: {
    // top: -45,
    marginTop: -45,
  },
  txtUserName: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  txtUserStatus: {
    fontWeight: '400',
    fontSize: 10,
    color: '#FF576E',
    lineHeight: 12.65,
  },
  imgUser: {
    width: 94,
    height: 94,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    position: 'relative',
  },
  iconStatus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
  },

  // setting menu
});

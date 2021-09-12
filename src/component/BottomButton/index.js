import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import {COLOR_BORDER} from '../../constants';
import ActivityIcon from '../../assets/icon/icon-activity.svg';
import BloodIcon from '../../assets/icon/icon-blood.svg';
import ProfileIcon from '../../assets/icon/icon-profile.svg';
import {useNavigation} from '@react-navigation/native';

const BottomButton = ({indexParam}) => {
  const [active, setActive] = useState(indexParam);
  const handleButtonPress = index => {
    setActive(index);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <ActivityIcon style={{color: active === 1 ? '#FF576E' : '#BEBEBE'}} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.container,
          {
            borderRadius: 100,
            backgroundColor: active === 2 ? '#FF576E' : '#FF2744',
            marginTop: -16,
            padding: 15,
          },
        ]}
        onPress={() => {
          navigation.navigate('BloodDonationRegister');
        }}>
        <BloodIcon style={{color: 'white'}} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <ProfileIcon style={{color: active === 3 ? '#FF576E' : '#BEBEBE'}} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 87,
    borderTopWidth: 1,
    borderTopColor: COLOR_BORDER,
    backgroundColor: '#FBFBFB',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

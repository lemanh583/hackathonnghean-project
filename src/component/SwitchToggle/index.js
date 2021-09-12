// import SwitchToggle from "react-native-switch-toggle";
import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {COLOR_BORDER, COLOR_PRIMARY} from '../../constants';

const SwitchButton = ({title}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Switch
        trackColor={{true: '#C3C3C3', false: COLOR_PRIMARY}}
        thumbColor={isEnabled ? '#fff' : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switchStyle}
      />
      <Text style={styles.txtTileInput}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  txtTileInput: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 15,
  },
  switchStyle: {
    width: 56,
    height: 32,
    padding: 2,
  },
});

export default SwitchButton;

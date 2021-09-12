import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {COLOR_BORDER, COLOR_PRIMARY} from '../../constants';

export default function RequiredInput({title, style, ...otherProps}) {
  return (
    <View style={[styles.viewInput, style]}>
        <View style={styles.requiredTitle}>
            <Text style={styles.txtTileInput}>{title}</Text>
            <Text style={styles.RequiredInput}>*</Text>
        </View>
        <View style={styles.input}>
            <TextInput {...otherProps} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewInput: {
    paddingTop: 20,
  },
  txtTileInput: {
    fontSize: 12,
    fontWeight: '700',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    marginTop: 5,
    justifyContent: 'center',
    padding: 5,
  },
  requiredTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  RequiredInput: {
    fontSize: 12,
    color: COLOR_PRIMARY,
  }
});
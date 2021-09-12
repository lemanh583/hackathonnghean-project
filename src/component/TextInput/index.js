import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLOR_BORDER} from '../../constants';

export default function AppTextInput({title, style, forgot, heightInput, ...otherProps}) {
  return (
    <View style={[styles.viewInput, style]}>
      <View style={styles.headerInput}>
        <Text style={styles.txtTileInput}>{title}</Text>
        {forgot && (
          <TouchableOpacity>
            <Text style={styles.txtForgot}>Forgot?</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.input, heightInput]}>
        <TextInput {...otherProps} style={[styles.textInput,heightInput]}/>
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
  headerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtForgot: {
    fontWeight: '400',
    fontSize: 12,
    color: '#F8766E',
  },
  textInput: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12.5
  }
});

import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Save',styleButton, colorTitle,noneBorder } = props;
  return (
    <Pressable style={[styles.button, styleButton, noneBorder ? styles.borderButton : '']} onPress={onPress}>
      <Text style={[styles.text, colorTitle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    // marginBottom: 15,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF2744'
    // backgroundColor: 'black',
  },
  borderButton: {
    borderWidth: 0,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15.6,
    color: '#FF2744',
  },
});
import React, { useState } from 'react';
import {View, Text, Modal, StyleSheet, Pressable} from 'react-native';
import { COLOR_BORDER, COLOR_PRIMARY } from '../../constants';

const press =(props) =>{
    const {styleButton,styleTxt,txt}= props;
    return(
        <View style={[styles.button]}>
            <Text style={[styles.textStyle,styleTxt]}>{txt}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 3,
        backgroundColor: COLOR_PRIMARY
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
});
export default press;
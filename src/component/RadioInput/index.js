import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {COLOR_BORDER, COLOR_PRIMARY} from '../../constants';

const RadioButton = props => {
  const {arr} = props;
  const titleInput = props.title;
  const [value, setValue] = useState(arr[0].key);
  return (
    <View style={styles.viewCheckRadio}>
      {titleInput && (
        <View style={styles.cssTileRadio}>
          <Text style={styles.txtTileRadio}>{titleInput}</Text>
        </View>
      )}
      <FlatList
        numColumns={2}
        keyExtractor={item => item.key}
        data={arr}
        renderItem={({item}) => (
          <View key={item.key} style={styles.viewInput}>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                setValue(item.key);
              }}>
              {value === item.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
            <Text style={styles.txtTileInput}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewCheckRadio: {
    flex: 1,
    marginTop: 5,
  },
  cssTileRadio: {
    marginTop: 15,
  },
  txtTileRadio: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  viewInput: {
    marginTop: 10,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  txtTileInput: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    marginRight: 10,
    borderColor: COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 7,
    borderColor: COLOR_PRIMARY,
  },
});

export default RadioButton;

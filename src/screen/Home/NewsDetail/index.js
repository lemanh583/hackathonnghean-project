import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';
import IconBack from '../../../assets/icon/icon-back.svg';
import mockData from './mockData';

function NewsDetail({navigation, route}) {
  const [data, setDate] = useState(null);

  useEffect(async () => {
    try {
      // console.log(route.params.id);
      const response = await fetch(`https://hackathonbackend123.herokuapp.com/news/${route.params.id}`);
      const details = await response.json();
      setDate({
        id: details._id,
        title: details.title,
        time: details.time,
        body: details.content,
        imgUrl: details.imgUrl,
      });
    } catch (err) {
      console.log(err);
    }
  }, [])

  return data ? (
    <ScrollView>
      <Image
        width={Dimensions.get('screen').width}
        // height = {250}
        style={styles.img}
        source={{uri: data.imgUrl}}
      />
      <View style={styles.container}>
        <Text h2 style={styles.title}>
          {data.title}
        </Text>
        <Text style={styles.time}>{data.time}</Text>
        <Text style={styles.body}>{data.body}</Text>
      </View>
      <IconBack
        style={styles.iconBack}
        width={20}
        height={22}
        style={styles.iconBack}
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  ) : null;
}
export default NewsDetail;

const styles = StyleSheet.create({
  root: {},
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    marginTop: -20,
    padding: 20,
    paddingBottom: (Dimensions.get('screen').height * 1) / 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  time: {
    fontWeight: '400',
    fontSize: 10,
    color: '#BEBEBE',
    marginBottom: 10,
  },
  body: {
    fontWeight: '400',
    fontSize: 12,
    marginBottom: 10,
  },
  iconBack: {
    color: '#FF2744',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  img: {
    width: '100%',
    height: 250,

  }
});

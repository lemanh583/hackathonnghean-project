import React from 'react';
import {ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';
import Detail from './Detail';
import IconBack from '~/assets/icon/icon-back.svg';
import mockData from './mockData';
import BottomButton from '../../component/BottomButton';

function UrgentDetail({navigation, route}) {
  const [data, setData] = React.useState(null);

  React.useEffect(async () => {
    try {
      const response = await fetch(
        `https://hackathonbackend123.herokuapp.com/urgent/${route.params.id}`,
      );
      const details = await response.json();
      setData({
        imgUrl: details.imgUrl,
        title: details.unit,
        dateCreated: new Date(details.createdAt).toString(),
        detail: details.reason,
      });
    } catch (err) {
      // setNewsList(mockData.newsList.list);
    }
  }, []);

  return data ? (
    <View style={{flex: 1}}>
      <ScrollView style={styles.root}>
        <Image
          width={Dimensions.get('window').width}
          style={styles.img}
          source={{uri: data.imgUrl}}
        />
        <Detail
          title={data.title}
          dateCreated={data.dateCreated}
          detail={data.detail}
        />
        <IconBack
          style={styles.iconBack}
          width={20}
          height={22}
          style={styles.iconBack}
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  ) : null;
}
export default UrgentDetail;

const styles = StyleSheet.create({
  root: {
    // height: Dimensions.get('window').height,
  },
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    marginTop: -20,
    padding: 20,
    // paddingBottom: Dimensions.get('window').height,
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
    height: 250,
    resizeMode: 'cover'
  }
});

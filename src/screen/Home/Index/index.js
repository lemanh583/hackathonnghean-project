import React, { useState, useEffect } from  'react';
import {ScrollView, View, StyleSheet, Dimensions, SwipeableListView} from 'react-native';

import Header from '../../../component/Header';
import BottomButton from '../../../component/BottomButton';
import mockData from './mockData';
import Summary from './Summary';
import UrgentList from './UrgentList';
import Event from './Event';
import NewsList from './NewsList';

const Index = () => {
  const [newsList, setNewsList] = useState([]);
  const [urgentList, setUrgentList]= useState([]);

  useEffect(async () => {
    try {
      const response = await fetch('https://hackathonbackend123.herokuapp.com/news?limit=2');
      const data = await response.json();
      setNewsList(data.map(e => ({
        id: e._id,
        title: e.title,
        time: '02/12/2021',
        imgUrl: e.imgUrl,
        descriptions: `${e.descriptions.slice(0, 70)}...`,
      })));
    } catch (err) {
      // setNewsList(mockData.newsList.list);
    }
  }, []);

  useEffect(async () => {
    try {
      const response = await fetch('https://hackathonbackend123.herokuapp.com/urgent?limit=3');
      const data = await response.json();
      setUrgentList(data.map(e => ({
        id: e._id,
        name: e.unit,
        bloodType: e.bloodType,
      })));
    } catch (err) {
      // setNewsList(mockData.newsList.list);
    }
  }, []);

  return (<View style={styles.root}>
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <Summary {...mockData.summary} />
        <UrgentList list={urgentList} />
        <Event {...mockData.event} />
        <NewsList list={newsList} />
      </View>
    </ScrollView>
    {/* <BottomButton indexParam={1} /> */}
  </View>
)};

export default Index;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    // minHeight: Dimensions.get('window').height,
    flex: 1,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: -47,
    paddingBottom: Dimensions.get('screen').height*1/5,
  },
});

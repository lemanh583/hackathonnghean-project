import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import List from './mockData';
import Item from '../../Urgent/Item';
import { useNavigation } from '@react-navigation/native';

function NewsScreen() {
  const [newsList, setNewsList] = React.useState([]);
  const navigation = useNavigation();

  React.useEffect(async () => {
    try {
      const response = await fetch('https://hackathonbackend123.herokuapp.com/news');
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
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      id={item.id}
      imgUrl={item.imgUrl}
      time={item.time}
      description={item.descriptions}
      onPress={{name:'NewsDetail', id: item.id}}
    />
  );
  return (
    <View style={styles.container}>
          <FlatList
            data={newsList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            nestedScrollEnabled={true}
          />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  viewBody: {
    flex: 1,
  },
});
export default NewsScreen;

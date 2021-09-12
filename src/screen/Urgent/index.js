import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import List from './mockData';
import Item from './Item';

function UrgentScreen() {
  const [urgentList, setUrgentList]= React.useState([]);

  React.useEffect(async () => {
    try {
      const response = await fetch('https://hackathonbackend123.herokuapp.com/urgent');
      const data = await response.json();
      setUrgentList(data.map(e => ({
        id: e._id,
        title: e.unit,
        time: '02/12/2021',
        imgUrl: e.imgUrl,
        description: `${e.reason.slice(0, 70)}...`,
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
      description={item.description}
      onPress={{name: "UrgentDetail", id: item.id}}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={urgentList}
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
    padding: 20,
  },
  viewBody: {
    flex: 1,
  },
});
export default UrgentScreen;

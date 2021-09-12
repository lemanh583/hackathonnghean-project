import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const CustomCarousel = ({data}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const renderItem = ({item}) => (
    <ImageBackground
      source={item.imgUrl}
      resizeMode="cover"
      style={styles.item}
      imageStyle={{borderRadius: 5}}
      blurRadius={1}>
      <View style={styles.top}>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.time}>Ngày {item.time}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </ImageBackground>
  );

  return (
    <SafeAreaView>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width - 40}
        itemWidth={Dimensions.get('window').width - 40}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        containerStyle={styles.pagination}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </SafeAreaView>
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({
  root: {},
  item: {
    width: Dimensions.get('window').width - 40,
    height: 108,
    borderRadius: 50,
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
  },
  status: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#FF576E',
    color: 'white',
    borderRadius: 4,
    fontSize: 10,
    fontWeight: 'normal',
  },
  bottom: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 10,
    fontWeight: 'normal',
    color: 'white',
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  pagination: {
    marginTop: -20,
    marginBottom: -20,
  },
  dot: {
    width: 18,
    height: 6,
    borderRadius: 100,
    backgroundColor: '#FF2744',
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: '#BEBEBE',
  },
});

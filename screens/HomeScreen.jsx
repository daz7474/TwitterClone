import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons, AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3daa1-471f-bd96-145571e29d3',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da31-471f-bd96-145571e29324',
      title: 'Fifth Item',
    },
    {
      id: '58694a0f-3d4a1-471f-bd96-145571e293242',
      title: 'Sixth Item',
    },
    {
      id: '58694a0f-3d4a12-471f-bd96-145571e29324',
      title: 'Seventh Item',
    },
    {
      id: '58694a0f-3d4a31-471f-bd96-145571e29322',
      title: 'Eighth Item',
    },
  ];

  function gotoProfile() {
    navigation.navigate('Profile Screen');
  };

  function gotoSingleTweet() {
    navigation.navigate('Tweet Screen');
  };

  function gottoNewTweet() {
    navigation.navigate('New Tweet');
  };

  const renderItem = ({ item }) => (
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={() => gotoProfile()}>
        <Image style={styles.avatar} source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }} />
      </TouchableOpacity>
      <View style={{ flex: 1}}>
        <TouchableOpacity style={styles.flexRow} onPress={() => gotoSingleTweet()}>
          <Text numberofLines={1} style={styles.tweetName}>{item.title}</Text>
          <Text numberofLines={1} style={styles.tweetHandle}>@drehimself</Text>
          <Text>&middot;</Text>
          <Text numberofLines={1} style={styles.tweetHandle}>9m</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotoSingleTweet()}>
          <Text style={styles.tweetContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla ab facere tenetur distinctio veniam ipsa sint deserunt, aspernatur laudantium?
          </Text>
        </TouchableOpacity>

        <View style={styles.tweetEngagement}>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons 
              name="comment" 
              size={22} color="gray" 
              style={{ marginRight: 2 }} 
            />
            <Text style={styles.textGray}>456</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons 
              name="retweet" 
              size={22} 
              color="gray" 
              style={{ marginRight: 2 }} 
            />
            <Text style={styles.textGray}>32</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons 
              name="heart" 
              size={22} 
              color="gray" 
              style={{ marginRight: 2 }} 
            />
            <Text style={styles.textGray}>4,456</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons 
              name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} 
              size={22} 
              color="gray" 
              style={{ marginRight: 2 }} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => gottoNewTweet()}
      >
        <AntDesign name='plus' size={26} color='white' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'white',
  },
  flexRow: {
    flexDirection: 'row',
  },
  tweetContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tweetSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  tweetName: {
    fontWeight: 'bold',
    color: '#222222',
  },
  tweetHandle: {
    marginHorizontal: 8,
    color: 'gray',
  },
  tweetContentContainer: {
    marginTop: 4,
  },
  tweetContent: {
    lineHeight: 20,
  },
  textGray: {
    color: 'gray',
  },
  tweetEngagement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d9bf1',
    position: 'absolute',
    bottom: 20,
    right: 12,
  },
  ml4: {
    marginLeft: 16,
  }
});
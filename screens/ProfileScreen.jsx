import React from 'react';
import { View, Text, StyleSheet, Image, Linking, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
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

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 20 }}>
      <Text>{item.title}</Text>
    </View>
  );

  const ProfileHeader = () => (
    <View style={styles.container}>
      {/* Profile Background Image */}
      <Image style={styles.backgroundImage} source={{
          uri: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80'
        }} 
      />

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }} 
        />

        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>

      {/* Profile Name */}
      <View style={styles.nameContainer}>
          <Text style={styles.profileName}>
            Andre Madarang
          </Text>
          <Text style={styles.profileHandle}>
            @drehimself
          </Text>
      </View>

      {/* Profile About */}
      <View style={styles.profileContainer}>
          <Text style={styles.profileContainerText}>
            CEO of CEOs. PhD, MSc, SEO, HTML, CSS, JS Evangelist Pro Expert S Rank Elite Best of the best.
          </Text>
      </View>

      {/* Location */}
      <View style={styles.locationContainer}>
        <EvilIcons 
          name="location" 
          size={24} 
          color="gray" 
        />
        <Text style={styles.textGray}>
          Toronto, Canada
        </Text>
      </View>

      {/* Link */}
      <View style={styles.linkContainer}>
        <TouchableOpacity
          style={styles.linkItem}
          onPress={() => Linking.openURL('https://laracasts.com')}
        >
          <EvilIcons name="link" size={24} color="gray" />
          <Text style={styles.linkColor}>
            laracasts.com
          </Text>
        </TouchableOpacity>

        <View style={[styles.linkItem, styles.ml4]}>
          <EvilIcons 
            name="calendar" 
            size={24} 
            color="gray" 
          />
          <Text style={styles.textGray}>
            Joined March 2009
          </Text>
        </View>
      </View>

      {/* Follow */}
      <View style={styles.followContainer}>
        <View style={styles.followItem}>
          <Text style={styles.followItemNumber}>
            509
            </Text>
          <Text style={styles.followItemLabel}>
            Following
            </Text>
        </View>

        <View style={[styles.followItem, styles.ml4]}>
          <Text style={styles.followItemNumber}>
            2,354
            </Text>
          <Text style={styles.followItemLabel}>
            Followers
            </Text>
        </View>
      </View>

      <View style={styles.separator}></View>

    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (
        <View style={styles.separator}></View>
      )}
      ListHeaderComponent={ProfileHeader}
    />
  );
}

const styles = StyleSheet.create({
  textGray: {
    color: 'gray',
  },
  ml4: {
    marginLeft: 16,
  },
  container: { 
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: 800,
    height: 120,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    marginTop: -34,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: 'white',
  },
  followButton: {
    backgroundColor: '#0f1418',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  nameContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  profileHandle: {
    color: 'gray',
    marginTop: 1,
  },
  profileContainer: {
    paddingHorizontal: 10,
    marginTop: 8,
  },
  profileContainerText: {
    lineHeight: 22,
  },
  locationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 12,
  },
  linkContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 4,
  },
  linkColor: {
    color: '#1d9bf1',
  },
  linkItem: {
    flexDirection: 'row',
  },
  followContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  followItem: {
    flexDirection: 'row',
  },
  followItemNumber: {
    fontWeight: 'bold',
  },
  followItemLabel: {
    marginLeft: 4,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
});
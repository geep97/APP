import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Generate initial fake friends when the component mounts
    generateFakeFriends();
  }, []);

  const generateFakeFriends = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();

      const fakeFriends = data.results.map((user) => ({
        name: `${user.name.first} ${user.name.last}`,
        picture: user.picture.medium,
        isFriend: Math.random() >= 0.5,
      }));

      setFriends(fakeFriends);
    } catch (error) {
      console.error('Error fetching fake friends:', error);
    }
  };

  const handleFriendRequest = (index) => {
    setFriends((prevFriends) => {
      const updatedFriends = [...prevFriends];
      updatedFriends[index].isFriend = !updatedFriends[index].isFriend;
      return updatedFriends;
    });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.friendContainer}>
      <Image style={styles.profileImage} source={{ uri: item.picture }} />
      <Text style={styles.friendName}>{item.name}</Text>
      <TouchableOpacity
        style={item.isFriend ? styles.removeFriendButton : styles.addFriendButton}
        onPress={() => handleFriendRequest(index)}
      >
        <Text style={styles.buttonText}>{item.isFriend ? 'Remove Friend' : 'Add Friend'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Friend List</Text>

      <FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.friendList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  friendList: {
    flex: 1,
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  addFriendButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  removeFriendButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FriendList;

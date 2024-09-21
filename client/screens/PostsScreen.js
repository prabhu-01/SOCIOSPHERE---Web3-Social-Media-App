// screens/PostsScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import data from '../data/sample.json'; // Import sample data

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from sample data (eventually replace with blockchain data)
    setPosts(data.posts);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <Text style={styles.username}>{post.user}</Text>
          <Text style={styles.content}>{post.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  postContainer: {
    marginBottom: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
  },
});

export default PostsScreen;

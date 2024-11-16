import React from 'react';
import { View, StyleSheet, ScrollView,Text } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <View style={styles.container}> 
      {/* <Header/>  */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {children}
      </ScrollView>
      <Footer/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor:"#242424"
  },

  scrollContainer: {
    padding: 5,
    flexGrow: 1
  },
});

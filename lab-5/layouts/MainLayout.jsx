import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (

    <ScrollView style={styles.container}>
        <Header/>
      {children}
      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"grey",
    height:"200%"
  },
});

export default MainLayout;
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Using AntDesign icons
import { useNavigation } from '@react-navigation/native';
import { defaultTransactionEntry } from './utility';

export default function FAB() {
  const navigation = useNavigation();  // Access the navigation object using the hook
  const onPress = () => {
    navigation.navigate('Edit',  { transaction: defaultTransactionEntry })
  };

  return (
    <View style={{ flex: 1, justifyContent: 'right', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          right: 16,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}
      >
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

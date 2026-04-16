import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// Functional component with Props
export const CalcButton = ({ title, onPress, color = '#2c2c2c', textColor = '#fff' }: any) => (
  <TouchableOpacity 
    style={[styles.button, { backgroundColor: color }]} 
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { 
    width: 75, 
    height: 75, 
    borderRadius: 37.5, 
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 5
  },
  buttonText: { fontSize: 28, fontWeight: '600' },
});
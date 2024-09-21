import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default Button;

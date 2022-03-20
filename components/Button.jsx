import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { label } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
});

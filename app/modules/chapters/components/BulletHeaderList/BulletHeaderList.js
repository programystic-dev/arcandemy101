import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.js';

const BulletHeaderList = ({list}) => (
  <View style={styles.listContainer}>
    {list.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.titleContainer}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      );
    })}
  </View>
);

BulletHeaderList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default BulletHeaderList;

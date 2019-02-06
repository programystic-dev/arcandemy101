import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.js';

const BulletList = ({list}) => (
  <View style={styles.listContainer}>
    {list.map((item, index) => {
      return (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.bullet}>{'\u2022'}</Text>
          <Text style={styles.content} key={index}>{item}</Text>
        </View>
      );
    })}
  </View>
);

BulletList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default BulletList;
